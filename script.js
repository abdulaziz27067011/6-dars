let isConfirm = confirm("malumot ochirasizmi");
let arr = [1, 2, 3, 4];
console.log(isConfirm);

if (isConfirm) {
    arr.pop();
    alert(arr.length);
}
else {
    alert(arr.length);
}