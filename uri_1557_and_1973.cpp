/**Bismillahir Rahmanir Rahim.**/

#include <stdio.h>
int main()
{
    long long int N, i;
    scanf("%lld", &N);
    long long int star[N], sheep[N];
    long long int sum_trak=0, sum_sheep=0;
    for(i=0; i<N; i++)
    {
        scanf("%lld", &sheep[i]);
        star[i]=0;
    }
    i=0;
    while(1)
    {
        if(i==0 && sheep[i]%2==0)
        {
            star[i]=1;
            if(sheep[i]>0)
                sheep[i]--;
            break;
        }
        else if(i==N-1 && sheep[i]%2==1)
        {
            star[i]=1;
            if(sheep[i]>0)
                sheep[i]--;
            break;
        }
        else if(sheep[i]%2==1)
        {
            sheep[i]--;
            star[i]=1;
            i++;
        }
        else if(sheep[i]%2==0)
        {
            star[i]=1;
            if(sheep[i]>0)
                sheep[i]--;
            i--;
        }


    }
    for(i=0; i<N; i++)
    {
        sum_sheep += sheep[i];
        sum_trak += star[i];
    }
    printf("%lld %lld\n", sum_trak, sum_sheep);
    return 0;
}

/*
4
9 0 10 10
2 27
--------
4
10 0 10 10
1 29
---------
4
9 2 10 10
2 28
---------
4
9 9 2 10
3 25
---------
4
9 9 0 10
3 24
*/

/*
#include<bits/stdc++.h>
using namespace std;

int main() {
int n,c = 0, i = 0, sum = 0, t = 0;
cin>> n;

int X[n];

for(int i = 0; i < n; i++){
    cin>> X[i];
}

while(i < n){
    if(X[i]%2 != 0){
        if(X[i] <= 0){
            break;
        }else{
            X[i] = X[i] - 1;
            cout<<i<<" "<<X[i]<<endl;
            sum += X[i];
            cout<<sum<<endl;
            c++;
            i++;
        }
    }else{
        if(i == 0 || X[i] < 0){
            break;
        }
        X[i] = X[i-1];
        if(X[i] > 0){
            X[i] = X[i] - 1;
            cout<<i<<" "<<X[i]<<endl;
            sum += X[i];
            cout<<sum<<endl;
            t++;
            i--;
        }
    }
}

if(t != 0){
    c++;
}


cout<<c<<" "<<sum<<endl;
}
*/


/*
#include <stdio.h>

int main () {
   char c[100];

   printf("Enter character: ");
   getchar();

   printf("Character entered: ");
   for(int i = 0; i < 2; i++){
     gets(c);
   }

   return(0);
}
*/
/*
#include<bits/stdc++.h>
using namespace std;

int main(){
int L;
while(scanf("%d" ,&L) != EOF){
    int arr[L][L] = 0;
    for(int i = 0; i < L; i++){
        for(int j = 0; j < L; j++){
            if(i == j && ){
                arr[i][j] = 2;
            }
        }
    }
}
}
*/
/*
#include<bits/stdc++.h>
using namespace std;

int main(){
int N;
while(scanf("%d" ,&N)!=EOF){
    if(N == 0){
        cout<<"vai ter copa!"<<endl;
    }else if( N > 0){
            cout<<"vai ter duas!"<<endl;
    }
}
}
*/
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
