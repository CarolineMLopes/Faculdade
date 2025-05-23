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
    float real;
    float resultado;
    printf("Informe o valor em R$(reais):\n");
    scanf("%f", &real);
    
    int opcao;
    printf("Escolha a moeda para converter:\n");
    printf("1- Dolar\n");
    printf("2- Euro\n");
    printf("3- Libra\n");
    scanf("%d", &opcao);
    
    switch (opcao){
        case 1:
        resultado = real / 5.75;
        printf("O valor em R$ %.2f reais em dolar eh: $ %.2f \n", real, resultado);
        break;

        case 2:
        resultado = real / 6.23;
        printf("O valor em R$ %2.f reais em euro eh: $ %2.f \n", real, resultado);
        break;

        case 3:
        resultado = real / 7.46;
        printf("O valor em R$ %2.f reais em libra eh: $ %2.f \n", real, resultado);
        break;
        
        default:
            printf("Opção nao valida\n");
    }
    }