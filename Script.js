// ===== ATUALIZA SANIDADE =====
function atualizarSanidade() {
    let atual = parseInt(document.getElementById('sanidadeAtual').value) || 0;
    let max = parseInt(document.getElementById('sanidadeMax').value) || 0;
    document.getElementById('sanidadeDisplay').innerText = `${atual} / ${max}`;
}

// ===== ATUALIZA BÔNUS DAS PERÍCIAS =====
function atualizarBonus(periciaId) {
    let input = document.getElementById(periciaId);
    let valor = parseInt(input.value) || 0;
    // Aqui você pode adicionar lógica de bônus automático
    // Exemplo: aumentar automaticamente se algum atributo correspondente mudar
    // Por enquanto, só mostra o valor digitado
}

// ===== RESETAR FICHA =====
function resetarFicha() {
    // Resetar todos os inputs
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
    document.getElementById('sanidadeDisplay').innerText = '0 / 0';
}
