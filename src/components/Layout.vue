<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <p>
                <slot name="footer">
                    valeur par défaut
                </slot>
                Copyright 2024 ©
            </p>
        </footer>
    </div>
</template>