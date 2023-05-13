export function home_page(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.send(`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>chatgpt-truy-api</title>
</head>
<body>
<h3>服务部署成功</h3>
<p>
    请在 <a href="https://github.com/truynal/chatgpt-api">truynal/chatgpt-api</a> 查看使用文档
</p>
</body>
</html>
    `)
}
