#include<bits/stdc++.h>
using namespace std;

int main(){
double s1,s2;
int count = 0;

while(true){
    if(count == 0){
        cin >> s1;

        if(s1 >= 0.00 && s1 <= 10.00){
            count = 1;
        }else{
            cout<<"nota invalida"<<endl;
        }

    }else if(count == 1){
        cin >> s2;

        if(s2 >= 0.00 && s2 <= 10.00){
            printf("media = %.2f\n",(s1+s2)/2.00);

            int X = 0,i = 0;
            while(i == 0){
                cin >> X;
                if(X == 2 || X == 1){
                    i = 1;
                }else{
                    cout<<"novo calculo (1-sim 2-nao)"<<endl;
                    continue;
                }
            }

            if(X == 2){
                break;
            }else if(X == 1){
                count = 0;
                s1 = 0;
                s2 = 0;
                continue;
            }

        }else{
            cout<<"nota invalida"<<endl;
        }

    }
 }
}

