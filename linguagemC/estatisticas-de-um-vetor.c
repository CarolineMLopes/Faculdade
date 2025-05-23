#include <stdio.h>


int maiorValor(int *num, int quantidade){
    int maior = num[0];
    for (int i = 1; i < quantidade; i++){
        if (num[i] > maior) {
            maior = num[i];
        }
    }
    return maior;
}

int menorValor(int *num, int quantidade){
    int menor = num[0];
    for (int i =1; i < quantidade; i++){
        if (num[1] < menor){
            menor = num[i];
        }
    }
    return menor;
}

int quantPares (int *num, int quantidade){
    int par = 0;
    for(int i = 1; i < quantidade; i++){
        if (num[i] %2 == 0){
            par++;
        }
    } return par;
}

int main() {
    int i;
    int num[10];
    int maior; 
    int menor;
    int par;

    
    for (i = 0; i < 10; i++) {
        printf("Insira o %d numero: ", i + 1);
        scanf("%d", &num[i]);
    }

    
    maior = maiorValor(num, 10);
    printf("Maior valor: %d\n", maior);
    
    menor = menorValor(num, 10);
    printf("Maior valor: %d\n", menor);
    
    par = quantPares(num, 10);
    printf("Quantidade de pares: %d\n", par);
    return 0;
}