public class Pessoa {
    private Double peso;
    private Double altura;
    private int idade;
    private Boolean caminhando;

    public Pessoa(Double peso, Double altura, int idade) {
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;
        this.caminhando = false;
    }

    public Double getPeso() {
        return peso;
    }

    public void setPeso(Double peso) {
        this.peso = peso;
    }

    public Double getAltura() {
        return this.altura;
    }

    public void setAltura(Double altura) {
        this.altura = altura;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }


    public void initCaminhar() {
        this.caminhando = true;
    }

    public void stopCaminhando() {
        this.caminhando = false;
    }

    public boolean isCaminahndo() {
        if (this.caminhando == true) {
            System.out.println("Estou caminhando");
            return true;
        }
        System.out.println("Estou parado");
        return false;
    }

    @Override
    public String toString() {
        return "peso=" + peso + ", altura=" + altura + ", idade=" + idade;
    }
}
