/**
 * Digite o valor em reais(R$): ??
 * 
 * Escolha a moeda para converter:
 * 1- Dolar
 * 2- Euro
 * 3- Libra
 * Opcao: ???
 * 
 * Caso 1
 *      O valor em R$ ___ em dolar eh: ___
 * Caso 2
 *      O valor em R$ ___ em euro eh: ___
 * Caso 3
 *      O valor em R$ ___ em libra eh: ___
*/

#include <stdio.h>

int main(){
    int real;
    printf("Informe o valor em R$(reais):\n");
    scanf("%d", &real);
    
    int moeda;
    printf("Escolha a moeda para converter:\n");
    printf("1- Dolar\n");
    printf("2- Euro\n");
    printf("3- Libra\n");
    scanf("%d", &moeda);
    
    switch (moeda){
        case 1:
        moeda = real / 5;
        printf("O valor em R$ %d reais em dolar eh: $ %d \n", real, moeda);
        break;

        case 2:
        moeda = real / 6;
        printf("O valor em R$ %d reais em euro eh: $ %d \n", real, moeda);
        break;

        case 3:
        moeda = real / 7;
        printf("O valor em R$ %d reais em libra eh: $ %d \n", real, moeda);
        break;
    }

}