var Prediction = document.getElementById("Prediction").innerText;

function predict() {
    const textvalue = "Bệnh dự đoán : " + Prediction;
    Swal.fire({
        title: "Kết quả dự đoán",
        text: textvalue,
        icon: "success",
        });
    }

function show() {
    document.querySelector(".btshow").style.display = "block";
    const textvalue = "Bệnh dự đoán : " + Prediction;
    Swal.fire({
        title: "Kết quả dự đoán",
        text: textvalue,
        icon: "success",
    });
}
function success() {
    alert('Đã lưu thành công')
}
function chuatri(){
    var searchData = Prediction;
    // Chuyển hướng trang với truy vấn tìm kiếm
    window.location.href = 'https://www.bing.com/search?q=c%C3%A1ch+ch%E1%BB%AFa+b%E1%BB%87nh '+searchData;
}
    

