function production() {
    var shed_A =(document.getElementById("shed_A").value);
    var shed_B =(document.getElementById("shed_B").value);
    var shed_C =(document.getElementById("shed_C").value);
    var shed_D =(document.getElementById("shed_D").value);
        shed_A = parseFloat(shed_A);
        shed_B = parseFloat(shed_B);
        shed_C = parseFloat(shed_C);
        shed_D = parseFloat(shed_D);
        var total=shed_A+shed_B+shed_C+shed_D;
        document.getElementById("shed_a").innerHTML=shed_A;
        document.getElementById("shed_b").innerHTML=shed_B;
        document.getElementById("shed_c").innerHTML=shed_C;
        document.getElementById("shed_d").innerHTML=shed_D;
        document.getElementById("total").innerHTML = total;
    }
    