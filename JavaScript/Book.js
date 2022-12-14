let blist=[];


function bookAdd(){
        const bookname = document.getElementById("txtBook").value;
        blist.push(bookname);

        let ul = document.getElementById("lsBook");
        ul.innerHTML="";

        for(const item of blist){
                const value = "<li>"+item+"</li>";
                ul.innerHTML = ul.innerHTML + value;
        }
        

}

