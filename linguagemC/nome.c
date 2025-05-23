#include <stdio.h>

int main(){
    int idade;
    char nome[50];
    
    printf("Informe seu nome:\n");
    scanf("%s", nome);
    
    printf("Informe sua idade:\n");
    scanf("%d", &idade);

    if (idade >= 18){
        printf("Voce eh maior de idade\n");
    } else{
        printf("Voce eh menor de idade\n");
    }

    printf("Seu nome eh: %s\n", nome);
    printf("Sua idade eh de: %d\n", idade);

}
