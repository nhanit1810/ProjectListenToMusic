// Lấy tham chiếu đến nút và thẻ your-list
const playlistButton = document.querySelector('.library button');
const library = document.querySelector('.library');
const yourList = document.getElementById('your-list');


// Thêm sự kiện click cho nút
yourList.style.display = 'none';
playlistButton.addEventListener('click', function() {
	// Kiểm tra trạng thái hiển thị của your-list
	if (yourList.style.display === 'none') {
		// Nếu đang ẩn, hiển thị nó
		library.style.height = 'auto';
		yourList.style.display = 'block';
	} else {
		// Nếu đang hiển thị, ẩn nó
		library.style.height = '70px';
		yourList.style.display = 'none';
	}
});

// Lấy tham chiếu đến nút Đăng nhập bằng ID của nó
const signInButton = document.getElementById('SignIn');

// Lấy tham chiếu đến nút Đăng ký bằng ID của nó
const signUpButton = document.getElementById('SignUp');

// Thêm sự kiện click cho nút Đăng nhập
if (signInButton) { // Kiểm tra xem nút có tồn tại không trước khi thêm sự kiện
    signInButton.addEventListener('click', () => {
        window.location.href = '/signIn';
    });
} else {
    console.error("Nút 'Đăng nhập' không tìm thấy!");
}

// Thêm sự kiện click cho nút Đăng ký
if (signUpButton) { // Kiểm tra xem nút có tồn tại không trước khi thêm sự kiện
    signUpButton.addEventListener('click', () => {
        window.location.href = '/signUp';
    });
} else {
    console.error("Nút 'Đăng ký' không tìm thấy!");
}

