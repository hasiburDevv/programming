#include <iostream>
using namespace std;

int main() {
int n,c = 0, i = 0, sum = 0, t = 0;
scanf("%d", &n);

int X[n];

for(int i = 0; i < n; i++){
    scanf("%d", &X[i]);
}

while(i < n){
    if(X[i]%2 != 0){
            X[i] = X[i] - 1;
            c++;
            i++;
    }else{
        if(i < 0){
            break;
        }
        else if(X[i] <= 0){
            i--;
            t++;
        }else{
            X[i] = X[i] - 1;
            t++;
            i--;
        }
    }
}

for(int i = 0; i<n; i++){
    sum += X[i];
}

if(t != 0){
    c++;
}

printf("%d %d\n", c, sum);
return 0;
}
