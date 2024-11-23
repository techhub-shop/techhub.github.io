document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Función para actualizar imágenes de productos
    window.updateProductImage = function(productElement, newImageUrl) {
        const imgElement = productElement.querySelector('.product-img');
        if (imgElement) {
            imgElement.src = newImageUrl;
        }
});