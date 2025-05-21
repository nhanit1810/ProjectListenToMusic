// Khai báo một module AngularJS mới tên là 'authApp'
var app = angular.module('authApp', []);

// --- Controller cho trang Đăng Nhập (Giữ nguyên từ ví dụ trước nếu cần) ---
app.controller('LoginController', function($scope) {
    $scope.user = {
        username: '',
        password: ''
    };
    $scope.loggedIn = false;

    $scope.login = function() {
        console.log('Tài khoản:', $scope.user.username);
        console.log('Mật khẩu:', $scope.user.password);

        if ($scope.user.username === 'nhan' && $scope.user.password === '123') {
            alert('Đăng nhập thành công!');
            $scope.loggedIn = true;
        } else {
            alert('Tài khoản hoặc mật khẩu không đúng!');
            $scope.loggedIn = false;
        }
    };
});

// --- Controller mới cho trang Đăng Ký ---
app.controller('RegisterController', function($scope) {
    // Khởi tạo một đối tượng 'user' trong $scope để lưu trữ dữ liệu đăng ký
    $scope.user = {
        username: '',
        password: '',
        confirmPassword: '' // Thêm trường xác nhận mật khẩu
    };

    // Biến để hiển thị thông báo đăng ký thành công
    $scope.registrationSuccess = false;

    // Hàm 'register' sẽ được gọi khi form đăng ký được submit
    $scope.register = function() {
        // Kiểm tra xem form có hợp lệ theo các quy tắc validation của AngularJS không
        // Và kiểm tra mật khẩu có khớp nhau không
        if ($scope.registerForm.$valid && $scope.user.password === $scope.user.confirmPassword) {
            console.log('Dữ liệu đăng ký:');
            console.log('Tài khoản:', $scope.user.username);
            console.log('Mật khẩu:', $scope.user.password); // Chỉ để debug, không nên log mật khẩu thật!
            console.log('Xác nhận mật khẩu:', $scope.user.confirmPassword);

            // Ở đây, bạn sẽ thực hiện logic đăng ký thực tế.
            // Ví dụ: gửi dữ liệu này đến một API backend để lưu vào cơ sở dữ liệu.

            // Giả lập đăng ký thành công
            alert('Đăng ký tài khoản ' + $scope.user.username + ' thành công!');
            $scope.registrationSuccess = true;

            // Bạn có thể reset form sau khi đăng ký thành công nếu muốn
            // $scope.user = { username: '', password: '', confirmPassword: '' };
            // $scope.registerForm.$setPristine(); // Đặt form về trạng thái ban đầu (chưa chạm, chưa chỉnh sửa)
            // $scope.registerForm.$setUntouched(); // Đặt tất cả các trường về trạng thái chưa được chạm
        } else {
            // Nếu form không hợp lệ hoặc mật khẩu không khớp
            alert('Vui lòng kiểm tra lại thông tin đăng ký!');
            $scope.registrationSuccess = false;
        }
    };
});