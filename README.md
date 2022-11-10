# stepmedia_test
FE (web có thể dùng reactjs / javascript / mvc / angular/ viewjs..): cho phép người dùng nhập vào danh sách Student (Full Name, Date of Birth - DOB), cần nhập ít nhất là 30 Students, nếu ít hơn 30 thì sẽ báo lỗi => sau đó submit danh sách Student về server.
BE (.net hoặc .netcore): nhận danh sách Student và sắp xếp theo qui luật: 10 Student lớn tuổi nhất nằm ở vị trí giữa danh sách, 10 Student có tuổi lớn tiếp theo nằm ở khu vực đầu danh sách, 10 Student có tuổi lớn tiếp theo nữa sẽ nằm ở khu vực cuối danh sách, các Student còn lại sẽ nằm ở khu vực others như sau. Lưu ý số lượng Student trước và sau sắp xếp là không thay đổi.
--> <10 Student có tuổi lớn nhì><others><10 Student có tuổi lớn nhất><others><10 Student có tuổi lớn thứ ba>
## Project
config api endpoint https://localhost:5000/api in `.env` file