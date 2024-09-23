let menu = document.getElementById("menu")
menu.innerHTML+= `<aside id="sidebar">
            <div class="d-flex" style="background-color: #148483;">
                <button id="toggle-btn" type="button">
                    <i> <img src="img/adne nav.png" alt="" style="width: 37px"></i>
                </button>
                <div class="sidebar-logo">
                    <a href="index.html">ADNE</a>
                </div>
            </div>
            <ul class="sidebar-nav">
                <li class="sidebar-item">
                <hr style="border: 1.5px solid #ffff; margin: 0;">
                    <a href="index.html" class="sidebar-link">
                        <i class="lni lni-home"></i>
                        <span>Inicio</span>
                    </a>
                </li>
                <hr style="border: 1.5px solid #ffff; margin: 0;">
                <li class="sidebar-item">
                    <a href="servicios.html" class="sidebar-link">
                        <i class="lni lni-license"></i>
                        <span>Servicios</span>
                    </a>
                </li>
                <hr style="border: 1.5px solid #ffff; margin: 0;">
                <li class="sidebar-item-fluid">
                    <a href="contactos.html" class="sidebar-link">
                        <i class="lni lni-phone"></i>
                        <span>Contactos</span>
                    </a>
                </li>
                <hr style="border: 1.5px solid #ffff; margin: 0;">
                <li class="sidebar-item-fluid">
                    <a href="requisitos.html" class="sidebar-link">
                        <i class="lni lni-laptop"></i>
                        <span>Requisitos</span>
                    </a>
                </li>
                <hr style="border: 1.5px solid #ffff; margin: 0;">
                <li class="sidebar-item-fluid">
                    <a href="descarga.html" class="sidebar-link">
                        <i class="lni lni-download"></i>
                        <span>Descargalo</span>
                    </a>
                </li>
                <hr style="border: 1.5px solid #ffff; margin: 0;">
            </ul>
        </aside>`
