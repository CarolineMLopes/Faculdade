#include <stdio.h>

int main(){
    int dia = 2;
    switch (dia){
        case 1:
            printf("Segunda-feira\n");
            break;
        case 2:
            printf("Terca-feira\n");
            break;
        case 3:
            printf("Quarta-feira\n");
            break;
        case 4:
            printf("Quinta-feira\n");
            break;
        case 5:
            printf("Sexta-feira\n");
            break;
        case 6:
            printf("Sabado\n");
            break;
        default:
            printf("Domingo\n");
    }
}