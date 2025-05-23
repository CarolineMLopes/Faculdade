#include <stdio.h>
#include <time.h>
#include <stdlib.h>

void jogo (int *palpite, int valorRandomico){
    if (*palpite < valorRandomico) {
            printf("Muito baixo!\n");
        } else if (*palpite > valorRandomico) {
            printf("Muito alto!\n");
    }
}

int main() {
    srand(time(NULL));
    int valorRandomico = rand() % 100 + 1;
    int palpite;
    int tentativas = 0;


    do {
        printf("Digite seu palpite de 1 a 100: ");
        scanf("%d", &palpite);
        tentativas++;
        
        if (palpite != valorRandomico) {
            jogo(&palpite, valorRandomico);
        }
        
    } while (palpite != valorRandomico);
    
    printf("Parabéns! Você acertou em %d tentativas.\n", tentativas);

    return 0;
}
