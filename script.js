let saldo = 0;

function updateSaldoDisplay() {
    document.getElementById("saldoDisplay").textContent = saldo.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

function tambahSaldo() {
    let tambahan = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));
    
    if (!isNaN(tambahan) && tambahan > 0) {
        saldo += tambahan;
        updateSaldoDisplay(); 
        window.alert("Saldo berhasil ditambahkan. Saldo Anda sekarang: " + saldo);
    } else {
        window.alert("Input tidak valid. Silakan masukkan jumlah saldo yang valid.");
    }
}

function kurangiSaldo() {
    let pengurangan = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin dikurangi:"));
    
    if (!isNaN(pengurangan) && pengurangan > 0) {
        if (saldo >= pengurangan) {
            saldo -= pengurangan;
            updateSaldoDisplay(); 
            window.alert("Saldo berhasil dikurangi. Saldo Anda sekarang: " + saldo);
        } else {
            window.alert("Saldo tidak mencukupi untuk melakukan pengurangan.");
        }
    } else {
        window.alert("Input tidak valid. Silakan masukkan jumlah saldo yang valid.");
    }
}

updateSaldoDisplay();
