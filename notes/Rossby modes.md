---
title: Rossby modes
tags: [math,fluid,science,physics]
---
# Rossby modes
- the (linearized) momentum equation for the fluid on the surface of the sphere with radius $R$ reads, in components:
$$
\begin{aligned}
\partial_tu^\theta-2\Omega\cos\theta u^\varphi&=-\frac{1}{R}\frac{\partial p}{\partial\theta}~,\\\\
\partial_tu^\varphi+2\Omega\cos\theta u^\theta&=-\frac{1}{R\sin\theta}\frac{\partial p}{\partial\varphi}~,
\end{aligned}
$$
where $\Omega$ is the angular velocity of the reference frame (attached to the planet) and $p$ is the *reduced pressure*. 
- the condition of incompressibility, $\mathbf{\nabla}\cdot\mathbf{u}=0$, translates to:
$$
\frac{\partial}{\partial\theta}\left(\sin\theta u^\theta\right)+\frac{\partial u^\varphi}{\partial\varphi}=0~.
$$
- Looking for oscillatory solutions of the form $\mathrm{e}^{i\left(\omega t+m \varphi\right)}$, we may cast the above system in a single autonomous equation:
$$
\left(\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\left(\sin\theta u^\theta\right)\right)-m^2-\frac{2m\Omega}{\omega}\sin^2\theta\right)u^\theta=0~,
$$
which can be rewritten as:
$$
\left(\frac{\partial}{\partial\mu}\left((1-\mu^2)\frac{\partial}{\partial\mu}\right)-\frac{m^2}{1-\mu^2}-\frac{2m\Omega}{\omega}\right)\tilde{u}^\theta=0~.
$$
where $\mu=\cos\theta$ and $\tilde{u}^\theta=\sin\theta u^\theta$ denotes the *toroidal component* of the velocity.
- This corresponds to the [*general Legendre equation*](https://en.wikipedia.org/wiki/Associated_Legendre_polynomials) whose solutions are:
$$
\tilde{u}^\theta=\mathrm{P}_\ell^m(\cos\theta)~,
$$
provided that the frequency satisfies the following dispersion relation:
$$
\omega=-\frac{2m\Omega}{\ell(\ell+1)}~.
$$
These solutions are called *Rossby modes*

---
### References
- [Longuet-Higgins, M. S. *Planetary waves on a rotating sphere. II* (1965) ,Proc. R. Soc. Ser. A,284, 40](https://doi.org/10.1098/rspa.1965.0051)
- [Zaqarashvili et al. *Rossby Waves in Astrophysics* (2021)](http://dx.doi.org/10.1007/s11214-021-00790-2)

