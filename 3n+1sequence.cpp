#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);cin.tie(NULL);

    long long p1, p2, n, i = 1;
    cin>> p1>> n;

    while( i < n){
        if(p1%2 == 0){
            p2 = p1/2;
            i++;
        }else{
            p2 = (p1*3) + 1;
            i++;
        }
        p1 = p2;
    }
    cout<<p1<<"\n";
}
