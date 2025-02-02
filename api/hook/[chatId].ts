import { VercelRequest, VercelResponse } from '@vercel/node'
import { Bot } from "grammy";

const { BOT_TOKEN } = process.env

const bot = new Bot(BOT_TOKEN)

type requestBody = {
    title: string
    content: string
    url: string
}

export default async (req: VercelRequest, res: VercelResponse) => {
    const chatId = req.query['chatId'] as string
    let request = req.body as requestBody

    if (!request) {
        res.status(400).json({ error: 'Invalid request body' })
        return
    }

    let text = `title: ${request.title}\ncontent: ${request.content}\nurl: ${request.url}`
    await bot.api.sendMessage(chatId, text)

    res.json({
        msg: 'done'
    })

    console.log(`Sent: ${text}`)
}