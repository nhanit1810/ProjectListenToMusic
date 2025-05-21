// Lấy tham chiếu đến nút và thẻ your-list
const playlistButton = document.querySelector('.library button');
const library = document.querySelector('.library');
const yourList = document.getElementById('your-list');

// Thêm sự kiện click cho nút
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