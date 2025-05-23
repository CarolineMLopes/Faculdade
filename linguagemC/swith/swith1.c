#include <stdio.h>

int main(){
    int valor = 1;
    switch (valor){
        case 1:
            printf("Valor 1\n");
            break;
        case 2:
            printf("Valor 2\n");
            break;
        case 3:
            printf("Valor 3\n");
            break;
        default:
            printf("Outro valor\n");
    }
}