// using Heap's algorithm for generating permutations
// https://www.geeksforgeeks.org/heaps-algorithm-for-generating-permutations/

function permutationSort(a) 
{
    var permutations = 0, sorted = false;
    
    while (!sorted)
    {
        if (a.length <= 1) { sorted = true; }
        else { heapPerm(a, a.length, a.length); }

        permutations++;
        console.log(a);
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

function heapPerm(a, size, n)
{
        if (size == 1)
            return;
  
        for (let i = 0; i < size; i++) 
        {
            heapPerm(a, size - 1, n);
  
            if (size % 2 == 1) 
            {
                let temp = a[0];
                a[0] = a[size - 1];
                a[size - 1] = temp;
            }
            else 
            {
                let temp = a[i];
                a[i] = a[size - 1];
                a[size - 1] = temp;
            }
        }
}

input = [12, 0, 2, 8, -1];

perms = permutationSort(input);
console.log(perms);