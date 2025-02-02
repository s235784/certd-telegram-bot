# Certd Telegram Bot

一个用于接收 [Certd](https://github.com/certd/certd) 通知的 Telegram 机器人

- 基于 Certd 的免费功能 Webhook 发送通知

## 使用

1. Telegram 上添加 [@nuotian_certd_bot](https://t.me/nuotian_certd_bot)
2. 发送 `/getHook` 命令
3. 复制 Bot 回复的链接并粘贴到 Certd 上的 webhook地址
4. 复制下方内容并粘贴到 Certd 上的 消息body模板

```json
{
    "title":"{title}",
    "content":"{content}",
    "url":"{url}"
}
```

5. 测试能否正常接收通知

## 自行部署

> [!CAUTION]
> 如果 Certd 部署在国内，Webhook 地址可能无法正常访问。此时可以自行在 Vercel 部署一份本项目，然后添加一个自定义域名解决。

1. 通过 [@BotFather](https://telegram.me/BotFather) 创建一个机器人
2. fork 本项目
3. 在 Vercel 上导入本地的 fork
4. 在 Vercel 上添加自定义域名
5. 在 Vercel 上添加环境变量

| 变量名       | 备注                                           |
|-----------|----------------------------------------------|
| BOT_TOKEN | 创建机器人时给的 token                               |
| BOT_URL   | Webhook 使用的域名，可以是 Vercel 提供的默认域名，也可以是自己添加的域名 |

6. 使用[该工具](https://telegram.tools/webhook-manager#)修改机器人的 Webhook 地址，格式为`https://$BOT_URL/api/bot`
6. 在 Certd 中测试该机器人
