var BinhBook, MinhBook;
var TransferBook = 0;
BinhBook = 27;
MinhBook = BinhBook/3;

while (BinhBook != MinhBook*2) {
	BinhBook--;
	MinhBook++;
	TransferBook++;
}

document.write("Binh phai chuyen cho Minh ",TransferBook," cuon sach de so sach cua Binh gap doi so sach cua Minh");
