
## WSL
O WSL ou Subsistema do Windows para Linux é um recurso do Windows que permite executar um sistema operacional Linux no Windows, sem a necessidade de máquinas virtuais. O WSL foi projetado para que desenvolvedores possam usar o Windows e o Linux ao mesmo tempo. É possível instalar e executar distribuições do Linux, como Ubuntu, Debian, Kali, entre outras, diretamente no Windows. O WSL 2 é a versão mais recente e está disponível no Windows 10 a partir da versão 2004, build 19041, ou superior. No Windows 11, o WSL 2 já está incluído por padrão em todas as versões.

Comando para instalar o WSL:
```bash
wls install
```

Comando para resolver o erro: WslRegisterDistribution failed with error: 0x80370102
```bash
bcdedit /set hypervisorlaunchtype auto
```

Após executar esses dois comando é preciso reiniciar o computador para implementar as alterações

Para executar o terminal na distribuição Linux basta executar:
```bash
wls
```

Para instalar a imagem do Ubuntu como padrão:
```bash
wls --install
```

---
## Docker
O Docker é uma plataforma de software de código aberto que permite aos desenvolvedores criar, executar, implantar, atualizar e gerenciar aplicativos em contêineres:
- Um contêiner Docker é um formato de compactação que reúne todo o código e dependências de uma aplicação em um formato padrão.
- Os contêineres do Docker podem ser executados em qualquer máquina ou máquina virtual que tenha o mecanismo do Docker instalado.
- O Docker é uma espécie de máquina virtual leve que garante a segurança das informações e não exige o uso de múltiplos sistemas operacionais.
O Docker oferece várias vantagens, incluindo:
- Simplicidade na conteinerização
- Facilidade de criação, implantação e execução de aplicativos
- Capacidade de garantir que o aplicativo seja executado da mesma forma em qualquer ambiente
- Menor peso em relação às VMs
- Tempos de inicialização mais rápidos
- Produtividade melhorada
- Maior eficiência

### Implementando o Docker com WLS

1. Habilitar o WSL e instalar uma distribuição Linux: para fazer isso basta seguir os passos descritos no tópico do WLS.

2. Instalar o `curl` e o `sudo` na distribuição Linux, se necessário:
```bash
sudo apt update
sudo apt install curl sudo -y
sudo apt upgrade -y
```

3. Adicione o repositório oficial do Docker:
```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

4. Instale o Docker Engine:
```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io -y
```

5. Inicie e configure o Docker para iniciar automaticamente:
```bash
sudo service docker start
sudo systemctl enable docker
```

6. Verificar se o Docker está funcionando:
```bash
docker --version
docker run hello-world
```

#### Dicas:
- **Atualizações:** Mantenha o Docker Engine atualizado executando:
```bash
sudo apt update && sudo apt upgrade -y
```

- Usar volumes compartilhados: O WSL permite que você acesse arquivos de Windows diretamente. Certifique-se de montar volumes corretamente para seus containers.

