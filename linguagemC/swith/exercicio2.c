/**
 * o pc deve escolher de 1 a 3
 *
 * 1- pedra
 * 2- papel
 * 3- tesoura
 * (randon)
 *
 * voce escolhe tambem entre
 *
 * 1- pedra
 * 2- papel
 * 3- tesoura
 * (swith case)
 *
 * mostrar o vencedor
 */

#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main()
{

    int escolha;
    printf("Escolha entre as opcoes:\n");
    printf("1- Pedra\n");
    printf("2- Papel\n");
    printf("3- Tesoura\n");
    scanf("%d", &escolha);

    switch (escolha)
    {
    case 1:
        printf("Voce escolheu Pedra\n");
        break;
    case 2:
        printf("Voce escolheu Papel\n");
        break;
    case 3:
        printf("Voce escolheu Tesoura\n");
        break;
    default:
        printf("Opcao nao encontrada\n");
        break;
    }

    srand(time(NULL));
    int valorRandomico = rand() % 3 + 1;

    if (valorRandomico == 1)
    {
        printf("Bot escolheu Pedra\n");
    }
    else if (valorRandomico == 2)
    {
        printf("Bot escolheu Papel\n");
    }
    else if (valorRandomico == 3)
    {
        printf("Bot escolheu Tesoura\n");
    }

    if (escolha == valorRandomico)
    {
        printf("Voce empatou!\n");
    }
    else if (
        (escolha == 1 && valorRandomico == 3) ||
        (escolha == 2 && valorRandomico == 1) ||
        (escolha == 3 && valorRandomico == 2))
    {
        printf("Voce ganhou!\n");
    }
    else
    {
        printf("Voce perdeu!\n");
    }
}
