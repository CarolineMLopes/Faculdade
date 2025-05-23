#include <stdio.h>

float calcularMedia(float *notas, int tamanho) {
    float soma = 0;
    for(int i = 0; i < tamanho; i++) {
        soma += *(notas + i);
    }
    return soma / tamanho;
}

int main()
{
    int opcao;
    float notas[5];
    float media = 7.2;
    int i;

    do
    {
        printf("====== MENU ======\n");
        printf("1 - Calcular media\n");
        printf("2 - Media geral\n");
        printf("3 - Sair\n");
        printf("Escolha uma opcao: ");
        scanf("%d", &opcao);

        if (opcao == 1){
            for (i = 0; i < 5; i++){
                printf("Digite a nota do aluno %d: ", i + 1);
                scanf("%f", &notas[i]);
            }

            for (i = 0; i < 5; i++){
                if (notas[i] >= media){
                    printf("Aluno %d: Aprovado\n", i + 1);
                } else {
                    printf("Aluno %d: Reprovado\n", i + 1);
                }
            }
        }

        if (opcao == 2){
            media = calcularMedia(notas, 5);
            printf("\nMedia: %.2f\n", media);
        }

        if (opcao == 3){
            printf("Saindo... \n");
        }

    } while (opcao != 3);
}
