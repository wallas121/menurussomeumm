#!/usr/bin/env python3
"""
Script para gerar QR Code em alta resolução para impressão em cartões de visita.

Requisitos:
    pip install qrcode[pil]

Uso:
    python gerar_qr.py

O QR Code será gerado com:
    - Alta resolução (300 DPI equivalente)
    - Tamanho ideal para impressão
    - Correção de erro alta (30%) para melhor legibilidade
"""

import qrcode
from qrcode.constants import ERROR_CORRECT_H

def gerar_qr_code(url: str, arquivo_saida: str = "qrcode_menu.png"):
    """
    Gera um QR Code em alta resolução.
    
    Args:
        url: URL que o QR Code deve apontar
        arquivo_saida: Nome do arquivo de saída
    """
    
    # Configuração para alta resolução e máxima correção de erro
    qr = qrcode.QRCode(
        version=2,  # Tamanho do QR (1-40, maior = mais dados)
        error_correction=ERROR_CORRECT_H,  # 30% de correção de erro
        box_size=20,  # Pixels por "caixa" - alto para impressão
        border=4,  # Margem branca ao redor
    )
    
    # Adiciona a URL
    qr.add_data(url)
    qr.make(fit=True)
    
    # Gera a imagem com cores do restaurante
    img = qr.make_image(
        fill_color="#1a1512",  # Cor escura premium
        back_color="#FFFFFF"   # Fundo branco para impressão
    )
    
    # Salva em alta resolução
    img.save(arquivo_saida)
    
    print(f"✅ QR Code gerado com sucesso!")
    print(f"📁 Arquivo: {arquivo_saida}")
    print(f"🔗 URL: {url}")
    print(f"📐 Resolução: {img.size[0]}x{img.size[1]} pixels")
    print(f"\n💡 Dica: Para impressão em cartão de visita, recomendamos")
    print(f"   um tamanho mínimo de 2cm x 2cm (≈ 236 pixels a 300 DPI)")

if __name__ == "__main__":
    # URL do menu digital - ALTERE PARA O SEU DOMÍNIO
    URL_MENU = "https://lamaisondoree.com/menu"
    
    # Gera o QR Code
    gerar_qr_code(URL_MENU)
    
    # Também gera versão com logo opcional
    print("\n" + "="*50)
    print("Para adicionar logo centralizado no QR Code:")
    print("="*50)
    print("""
from PIL import Image

# Abre o QR Code gerado
qr_img = Image.open("qrcode_menu.png")

# Abre o logo (deve ser quadrado, PNG com transparência)
logo = Image.open("logo.png")

# Redimensiona o logo (máx 30% do QR para não interferir na leitura)
logo_size = int(qr_img.size[0] * 0.25)
logo = logo.resize((logo_size, logo_size))

# Centraliza o logo
pos = ((qr_img.size[0] - logo_size) // 2, 
       (qr_img.size[1] - logo_size) // 2)

qr_img.paste(logo, pos, logo)
qr_img.save("qrcode_menu_com_logo.png")
""")
