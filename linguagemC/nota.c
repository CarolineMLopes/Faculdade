#include <stdio.h>

int main(){
    int nota;
    printf("informe a nota");
    scanf("%d", &nota);

if (nota >= 9){
    printf("Conceito A\n");
}else if (nota >= 7 && nota < 9){
    printf("Conceito B\n");
}else if(nota >= 5 && nota < 7){
    printf("Conceito C\n");
}else if(nota >= 3 && nota < 5){
    printf("Conceito D\n");
}else if(nota < 3){
    printf("Conceito E\n");
}else{
    printf("Conceito inexistente");
}
}