#include <stdio.h>

int main(){
    char opcao = 'B';
    switch (opcao){
        case 'A':
            printf("Valor A\n");
            break;
        case 'B':
            printf("Valor B\n");
            break;
        case 'C':
            printf("Valor C\n");
            break;
        default:
            printf("Outro valor\n");
    }
}