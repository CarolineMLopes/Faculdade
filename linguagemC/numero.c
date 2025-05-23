#include <stdio.h>
#include <string.h>

int main(){
    int numero1;
    int numero2;
    char operador[50];
    int total;
    
    printf("Insira o primeiro numero\n");
    scanf("%d", &numero1);
   
    printf("Insira o segundo numero\n");
    scanf("%d", &numero2);

    printf("Escolha um operador\n");
    scanf("%s", &operador);

    if (strcmp(operador, "+") == 0) {
        total = numero1 + numero2;
        printf("Resultado da soma: %d\n", total);
}else if(strcmp(operador, "-") == 0){
        total = numero1 - numero2;
        printf("Resultado da subtracao: %d\n", total);
}else if(strcmp(operador, "*") == 0){
        total = numero1 * numero2;
        printf("Resultado da multiplicacao: %d\n", total);
}else if(strcmp(operador, "/") == 0){
        total = numero1 / numero2;
        printf("Resultado da divisao: %d\n", total);
}else {
        printf("Operador nao encontrado");
}
}