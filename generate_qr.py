import qrcode

# Dados do link
url = "https://rus-six.vercel.app/"

# Configuração do QR Code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H, # Alta correção de erro (permite colocar logo no meio se quiser depois)
    box_size=10,
    border=4,
)

qr.add_data(url)
qr.make(fit=True)

# Criar imagem
img = qr.make_image(fill_color="black", back_color="white")

# Salvar
filename = "menu-qr-code.png"
img.save(filename)

print(f"QR Code gerado com sucesso: {filename}")
