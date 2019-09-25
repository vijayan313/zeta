function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  function jsondatas() {
    var myBooks = [
        {
            "ID": "1",
            "Book Name": "Computer Ai",
            "Category": "Computers",
            "Price": "125.60",
            "Autor": "vijay"
        },
        {
            "ID": "2",
            "Book Name": "Asp.Net 4 Blue Book",
            "Category": "Programming",
            "Price": "56.00",
            "Autor": "kumar"
        },
        {
            "ID": "3",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "helo"
        },
        {
            "ID": "4",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "aj hoke"
        },
        {
            "ID": "5",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "raj"
        },
        {
            "ID": "6",
            "Book Name": "Computer Ai",
            "Category": "Computers",
            "Price": "125.60",
            "Autor": "vijay"
        },
        {
            "ID": "7",
            "Book Name": "Asp.Net 4 Blue Book",
            "Category": "Programming",
            "Price": "56.00",
            "Autor": "kumar"
        },
        {
            "ID": "8",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "helo"
        },
        {
            "ID": "9",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "aj hoke"
        },
        {
            "ID": "10",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "raj"
        },
        {
            "ID": "11",
            "Book Name": "Computer Ai",
            "Category": "Computers",
            "Price": "125.60",
            "Autor": "vijay"
        },
        {
            "ID": "12",
            "Book Name": "Asp.Net 4 Blue Book",
            "Category": "Programming",
            "Price": "56.00",
            "Autor": "kumar"
        },
        {
            "ID": "13",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "helo"
        },
        {
            "ID": "14",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "aj hoke"
        },
        {
            "ID": "15",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "raj"
        },
        {
            "ID": "16",
            "Book Name": "Computer Ai",
            "Category": "Computers",
            "Price": "125.60",
            "Autor": "vijay"
        },
        {
            "ID": "17",
            "Book Name": "Asp.Net 4 Blue Book",
            "Category": "Programming",
            "Price": "56.00",
            "Autor": "kumar"
        },
        {
            "ID": "18",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "helo"
        },
        {
            "ID": "19",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "aj hoke"
        },
        {
            "ID": "20",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "raj"
        },
        {
            "ID": "21",
            "Book Name": "Computer Ai",
            "Category": "Computers",
            "Price": "125.60",
            "Autor": "vijay"
        },
        {
            "ID": "22",
            "Book Name": "Asp.Net 4 Blue Book",
            "Category": "Programming",
            "Price": "56.00",
            "Autor": "kumar"
        },
        {
            "ID": "23",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "helo"
        },
        {
            "ID": "24",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "aj hoke"
        },
        {
            "ID": "25",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "raj"
        },
        {
            "ID": "26",
            "Book Name": "Computer Ai",
            "Category": "Computers",
            "Price": "125.60",
            "Autor": "vijay"
        },
        {
            "ID": "27",
            "Book Name": "Asp.Net 4 Blue Book",
            "Category": "Programming",
            "Price": "56.00",
            "Autor": "kumar"
        },
        {
            "ID": "28",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "helo"
        },
        {
            "ID": "29",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "aj hoke"
        },
        {
            "ID": "30",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40",
            "Autor": "raj"
        }
    ]

    
    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

   
    var table = document.getElementById("myTable");

   

    var tr = table.insertRow(-1);                  
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");     
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    
    for (var i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myBooks[i][col[j]];
        }
    }
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
$(function() {
    breed.run({
      scope: 'people',
      input: data,
      runEnd: function(){
          for(i=1 ; i<=breed.getPageCount('people') ; i++){
            $('ul').append(
              $('<li>',{
                html: i,
              onclick: "breed.paginate({scope: 'people', page: " + i + "});"
            })
          );
        }
      }
    });
  });
  