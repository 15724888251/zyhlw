function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('请输入用户名和密码');
        return;
    }

    // 这里模拟登录成功，实际项目中需要与后端接口对接
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 500);
}
