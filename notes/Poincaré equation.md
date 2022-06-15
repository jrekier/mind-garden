---
title: Poincaré equation
tags: [math,fluid,physics,science]
---
# Poincaré equation
- Poincaré equation reads:
$$
\omega^2\mathbf{\nabla}^2\Phi=4\left(\hat{\mathbf{z}}\cdot\mathbf{\nabla}\right)^2\Phi~.
$$
- It can be understood as a *differential eigenvalue problem* in the frequency, $\omega$ with the function $\Phi$ serving as *eigenfunction*.
- The solutions depend on the boundary condition imposed which itself depends on the physical problem to solve.

---
- Poincaré equation governs the oscillations of the (reduced) pressure field of a rotating fluid.
Starting from the (linear) momentum equation in the frequency domain:
$$
i\omega\mathbf{u}+2\hat{\mathbf{z}}\times\mathbf{u}=-\mathbf{\nabla}p~,
$$
where we have identified the angular velocity of the reference frame with the unit basis vector $\hat{\mathbf{z}}$ so that $\omega$ is measured in units of the diurnal (angular) frequency. The above equation can be inverted to give the following expression for the velocity field:
$$
\mathbf{u}=\frac{i \omega}{4-\omega^{2}}\left(-\nabla p+\frac{2}{i \omega}(\hat{\mathbf{z}} \times \nabla p)+\frac{4}{\omega^{2}} \hat{\mathbf{z}}(\hat{\mathbf{z}} \cdot \nabla p)\right)~.
$$
From the condition of incompressibility $\mathbf{\nabla}\cdot\mathbf{u}=0$, one then arrives to the Poincaré equation for $p$.

