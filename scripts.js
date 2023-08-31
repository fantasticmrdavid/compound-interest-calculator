function validate(p ,r, t, n) {
    let validation = []
    if (!p || t <= 0 || Number.isNaN(p)) validation.push("Specify a valid principle value")
    if (!r || t <= 0 || Number.isNaN(r)) validation.push("Specify a valid interest rate %")
    if (!t || t <= 0 || Number.isNaN(t)) validation.push("Specify a valid term in months")
    if (Number.isNaN(n)) validation.push("Specify when interest is paid")

    return validation
}

function calculateTermAmount(p, r, t, n) {
    return Math.round(n > 0 ?
        p * Math.pow((1 + (r/n)), n * t)
        : p + p * r * t);
}