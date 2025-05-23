
#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main(){
    srand(time(NULL));
    int valorRandomico;
    valorRandomico = rand();
    printf("%d\n",valorRandomico);
    printf("%d\n",valorRandomico % 3);
    printf("%d\n",valorRandomico % 3 + 1);
} 