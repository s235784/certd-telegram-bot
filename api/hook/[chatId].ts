import { VercelRequest, VercelResponse } from '@vercel/node'
import { bot } from '../bot'

type requestBody = {
    title: string
    content: string
    url: string
}

export default async (req: VercelRequest, res: VercelResponse) => {
    const chatId = req.query['chatId'] as string
    let request = req.body as requestBody

    let text = `title: ${request.title}\ncontent: ${request.content}\nurl: ${request.url}`

    await bot.api.sendMessage(chatId, text)

    res.json({
        msg: 'done'
    })

    console.log(`Sent: ${text}`)
}