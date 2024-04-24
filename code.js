// using iterative version of Heap's algorithm for generating permutations
// https://en.wikipedia.org/wiki/Heap%27s_algorithm

function permutationSort(a) 
{
    var permutations = 0, sorted = false;
    
    var c = [];

    for (let i = 0; i < a.length; i++) 
    {
        c[i] = 0;
    }

    for (let i = 1; i < a.length; i) 
    {
        if (sorted == true)
        {
            break;
        }

        if (c[i] < i) 
        {
            if (i % 2 == 0)
            {
                swap(a, 0, i);
            } else {
                swap(a, c[i], i);
            }
        
            c[i] += 1;
            i = 1;
        } else 
        {
            c[i] = 0;
            i += 1;
        }

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

function swap(arr, item1, item2)
{
    var tmp = arr[item1];
	arr[item1] = arr[item2];
	arr[item2] = tmp;
}