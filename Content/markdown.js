
        // 定义加载 Markdown 文件的函数
    function loadMarkdownFile(filePath) {
            var xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);
    xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // 获取 Markdown 内容
                    var markdownContent = xhr.responseText;
    // 将 Markdown 转换为 HTML
    var htmlContent = marked(markdownContent);
    // 设置 HTML 内容
    document.getElementById('html-content').innerHTML = htmlContent;
                }
            };
    xhr.send();
        }

    // 加载 a.md 文件
    loadMarkdownFile('../assets/a.md');

