#include <iostream>
#include <string>

using namespace std;

int main() {
    int num = 123;
    
    std::string str = to_string(num);

    std::cout << str;

    return 0;
}