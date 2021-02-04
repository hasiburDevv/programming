/*#include <bits/stdc++.h>
using namespace std;
int n,T,t,p[31],d[31];
int main(){
    p[0] = 1;
    for(int i=1; i<31; i++) p[i] = p[i-1] << 1;
    for(int i=0; i<31; i++) d[i] = (int) ceil(log10(p[i]+1));
    while(scanf("%d",&n) and n){
        T = d[2*n-2];
        for(int i=0; i<n; i++){
            for(int j=0; j<n-1; j++){
                t = T - d[i+j];
                while(t--) printf(" ");
                printf("%d ",p[i+j]);
            }
            t = T - d[i+n-1];
            while(t--) printf(" ");
            printf("%d\n",p[i+n-1]);
        }
        printf("\n");
    }
    return 0;
}
*/
#include<bits/stdc++.h>
using namespace std;

int main(){
while(true){
    int N,sum = 1;
    cin>> N;
    int arr[N][N];

    if(N == 0){
        break;
    }

    for(int i = 0; i < N; i++){
        for(int j = 0, k = sum; j < N; j++){
            arr[i][j] = k;
            k *= 2;
        }
        sum *= 2;
    }

    int maxval = arr[N- 1][N -1];
    int width = round(1+log(maxval)/log(10));

    for(int i = 0; i < N; i++){
        for(int j = 0; j < N; j++){
            if(j == N - 1){
                printf("%*d\n", width, arr[i][j]);
            }else{
                printf("%*d ", width, arr[i][j]);
            }
        }
    }
    cout<<endl;
}
}

/*
#include<bits/stdc++.h>
using namespace std;

int main(){
while(true){
    int N, m = N-1;
    int j = 1, p = 0, q = 0, n, r;
    cin>> N;
    int arr[N][N];

    if(N == 0){
        break;
    }

    n=N;
    if(N%2==0){
        r=N/2;
    }else if(N%2==1){
        r=(N/2)+1;
    }

    for(int i=1; i<=r; i++){
        for(int j=p; j<n; j++){
            for(int k=q; k<n; k++){
                arr[i][k]=j;
            }
        }
        j++;
        p++; q++; n--;
    }

    for(int i = 0; i < N; i++){
        for(int j = 0; j < N; j++){
            if(j == N-1){
                cout<<arr[i][j];
            }else{
            cout<<arr[i][j]<<"--";
            }
        }
        cout<<endl;
    }
}
}

*/

/*
#include<bits/stdc++.h>
using namespace std;

int main(){
int num, a, b, par[4], impar[4], arr[15];

for(int k = 0; k < 15; k++){
    cin>> arr[k];
}

for(int k = 0,m = 0, n = 0; k < 15; k++){
    if(arr[k] % 2 == 0){
        par[m] = arr[k];
        cout<<"par["<<m<<"] = "<<par[m]<<endl;
        if(m == 5){
            a = k;
            m = 0;
        }
        m++;
    }else{
        impar[n] = arr[k];
        cout<<"impar["<<n<<"] = "<<impar[n]<<endl;
        if(n == 5){
            b = k;
            n = 0;
        }
        n++;
    }
}
}
*/



/*


#include <stdio.h>

int main()
{
   int N,a;
    scanf("%d",&N);
    for(a=1;a<=N;a++)
    {
        if(N%a==0)
            printf("%d\n",a);
    }
    return 0;
}

*/
