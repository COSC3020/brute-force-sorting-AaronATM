function permutationSort(a) 
{
    var permutations = 0, sorted = false;
    
    while (!sorted)
    {
        if (a.length <= 1) { sorted = true; }
        else { shuffle(a); }

        permutations++;
        sorted = checkSorted(a);
    }

    return permutations;
}

function checkSorted(a)
{
    for (var i = 0; i < a.length; i++)
    {
        if (a[i] > a[i + 1])
        {
            return false;
        }
    }

    return true;
}


// using Durstenfeld shuffle
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}