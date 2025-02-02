import { VercelRequest, VercelResponse } from '@vercel/node'
import { Bot, InlineKeyboard, webhookCallback } from 'grammy'

const { BOT_TOKEN, BOT_URL } = process.env

const bot = new Bot(BOT_TOKEN)

bot.command('start', async (ctx) => {
    await ctx.reply('Welcome to use Certd Bot')
})

bot.command('getHook', async (ctx) => {
    const chanId = ctx.message.chat.id
    const hookUrl = `${BOT_URL}/api/hook/${chanId}`
    const links = new InlineKeyboard()
        .url('Usage', 'https://github.com/s235784/certd-telegram-bot/blob/main/README.md')
    await ctx.reply(`Your Webhook URL:\n ${hookUrl}`, {
        reply_markup: links
    })
})

export default async (req: VercelRequest, res: VercelResponse) => {
    webhookCallback(bot, 'http')(req, res)
}