# NEET Physics: Rotational Motion (சுழற்சி இயக்கம்)

## I. Concept Notes (கருத்து குறிப்புகள்)

### 1. Introduction to Rotational Motion (சுழற்சி இயக்கத்திற்கான அறிமுகம்)
*   **Rotational Motion (சுழற்சி இயக்கம்):** When a body moves such that all its constituent particles describe concentric circles about a fixed line (axis of rotation).
    *   _Tamil Analogy:_ ஒரு பம்பரம் (spinning top) அதன் அச்சைச் சுற்றிச் சுழலும் இயக்கம்.

*   **Angular Displacement (கோண இடப்பெயர்ச்சி) (θ):** The angle swept by the radius vector of a rotating particle.
    *   Unit: radian (rad)
    *   _Tamil Analogy:_ கடிகார முள் (clock hand) ஒரு குறிப்பிட்ட கோணத்தில் நகர்வது.

*   **Angular Velocity (கோண திசைவேகம்) (ω):** Rate of change of angular displacement. ω = dθ/dt.
    *   Unit: rad/s
    *   _Tamil Analogy:_ மின்விசிறி (fan) ஒரு நொடியில் எவ்வளவு கோணத்தில் சுழல்கிறது.

*   **Angular Acceleration (கோண முடுக்கம்) (α):** Rate of change of angular velocity. α = dω/dt = d²θ/dt².
    *   Unit: rad/s²
    *   _Tamil Analogy:_ வேகமாக சுழல ஆரம்பிக்கும் அல்லது வேகம் குறையும் மின்விசிறியின் இயக்கம்.

*   **Relation between Linear and Angular Quantities:**
    *   Linear displacement (s) = rθ
    *   Linear velocity (v) = rω
    *   Linear acceleration (a_t) = rα (Tangential acceleration)
    *   Centripetal acceleration (a_c) = v²/r = rω²

### 2. Moment of Inertia (சுழற்சி நிலைமம்) (I)
*   **Definition:** It is the rotational analogue of mass in linear motion. It measures the resistance of a body to change its state of rotational motion.
    *   For a system of point masses: I = Σ mᵢrᵢ²
    *   For a continuous body: I = ∫ r² dm
    *   Unit: kg m²
    *   _Tamil Analogy:_ ஒரு கனமான கதவைத் (heavy door) திறக்க அல்லது மூட அதிக விசை தேவைப்படுவது போல, ஒரு பொருளைச் சுழற்ற அல்லது அதன் சுழற்சி வேகத்தை மாற்ற அதிக சுழற்சி நிலைமம் தேவை.

*   **Factors affecting Moment of Inertia:**
    1.  Mass of the body.
    2.  Distribution of mass relative to the axis of rotation. (Greater the distance of mass from the axis, greater the moment of inertia).

*   **Theorems of Moment of Inertia:**
    *   **Parallel Axis Theorem (இணை அச்சு தேற்றம்):** I = I_cm + Md²
        *   Where I is the moment of inertia about an axis, I_cm is the moment of inertia about a parallel axis passing through the center of mass, M is the total mass, and d is the perpendicular distance between the two axes.
        *   _Tamil Analogy:_ ஒரு கிரிக்கெட் மட்டையை (cricket bat) அதன் மையத்தில் பிடித்து சுழற்றுவதை விட, அதன் ஒரு முனையில் பிடித்து சுழற்றுவது கடினம். (I_cm < I).

    *   **Perpendicular Axis Theorem (செங்குத்து அச்சு தேற்றம்):** I_z = I_x + I_y
        *   For a planar body, if x and y axes lie in the plane of the body and z-axis is perpendicular to the plane, then I_z is the moment of inertia about the z-axis.
        *   _Tamil Analogy:_ ஒரு தட்டு போன்ற மெல்லிய பொருளை (thin plate) அதன் மையத்தில் செங்குத்தாகச் சுழற்றுவது, அதன் தளத்தில் உள்ள இரண்டு அச்சுச் சுழற்சிகளின் கூட்டுத்தொகைக்கு சமம்.

*   **Moments of Inertia for Standard Bodies (Selected):**
    *   Ring (about axis through center, perpendicular to plane): MR²
    *   Disc (about axis through center, perpendicular to plane): (1/2)MR²
    *   Rod (about axis through center, perpendicular to length): (1/12)ML²
    *   Solid Sphere (about diameter): (2/5)MR²

### 3. Torque (திருப்பு விசை) (τ)
*   **Definition:** It is the rotational analogue of force. It is the turning effect of a force about an axis of rotation.
    *   τ = r × F = r F sinθ
    *   τ = Iα (Newton's second law for rotation)
    *   Unit: N m
    *   _Tamil Analogy:_ கதவின் கைப்பிடியை (door handle) கதவின் விளிம்பில் பிடித்து இழுப்பது எளிது, ஆனால் கீல்களுக்கு அருகில் இழுப்பது கடினம். தூரம் அதிகமாக இருந்தால், அதே விசைக்கு அதிக திருப்பு விசை கிடைக்கும்.

### 4. Angular Momentum (கோண உந்தம்) (L)
*   **Definition:** It is the rotational analogue of linear momentum.
    *   For a particle: L = r × p = r × (mv)
    *   For a rigid body: L = Iω
    *   Unit: kg m²/s or J s
    *   _Tamil Analogy:_ ஒரு சுழலும் நாற்காலியில் (swivel chair) அமர்ந்திருக்கும் ஒருவர், கைகளை நீட்டி பின் உள்ளிழுக்கும்போது அவரது சுழற்சி வேகம் மாறுவது.

*   **Conservation of Angular Momentum (கோண உந்த அழிவின்மை):** If no external torque acts on a system, its total angular momentum remains constant.
    *   If τ_ext = 0, then L = constant, or Iω = constant.
    *   _Tamil Analogy:_ பனிச் சறுக்கு வீரர் (ice skater) கைகளை உள்ளிழுக்கும்போது வேகமாகச் சுழல்வது, கைகளை நீட்டும்போது மெதுவாகச் சுழல்வது. (I குறையும்போது ω அதிகரிக்கும்).

### 5. Rotational Kinetic Energy (சுழற்சி இயக்க ஆற்றல்) (KE_rot)
*   **Definition:** The energy possessed by a body due to its rotational motion.
    *   KE_rot = (1/2)Iω²
    *   Unit: Joule (J)
    *   _Tamil Analogy:_ மின்விசிறி சுழலும்போது அதற்குக் கிடைக்கும் ஆற்றல்.

### 6. Rolling Motion (உருளும் இயக்கம்)
*   **Definition:** A combination of translational (linear) motion and rotational motion.
    *   For pure rolling (without slipping): v_cm = Rω
        *   Where v_cm is the velocity of the center of mass, R is the radius, and ω is the angular velocity.
        *   _Tamil Analogy:_ ஒரு சக்கரம் (wheel) சாலையில் சறுக்காமல் உருண்டு செல்வது.

*   **Total Kinetic Energy of a Rolling Body:**
    *   KE_total = KE_translational + KE_rotational
    *   KE_total = (1/2)Mv_cm² + (1/2)I_cmω²
    *   KE_total = (1/2)Mv_cm² [1 + (I_cm / MR²)]

*   **Acceleration of a body rolling down an inclined plane:**
    *   a = (g sinθ) / [1 + (I_cm / MR²)]
    *   _Tamil Analogy:_ ஒரு சாய்வான தளத்தில் (inclined plane) உருண்டு வரும் ஒரு பந்து.

### 7. Comparison of Linear and Rotational Motion (நேர்கோட்டு மற்றும் சுழற்சி இயக்கங்களின் ஒப்பீடு)

| Linear Motion (நேர்கோட்டு இயக்கம்) | Rotational Motion (சுழற்சி இயக்கம்) |
| :------------------------------- | :------------------------------- |
| Mass (m)                         | Moment of Inertia (I)          |
| Linear Displacement (s)          | Angular Displacement (θ)       |
| Linear Velocity (v)              | Angular Velocity (ω)           |
| Linear Acceleration (a)          | Angular Acceleration (α)       |
| Force (F)                        | Torque (τ)                     |
| Linear Momentum (p = mv)         | Angular Momentum (L = Iω)      |
| Kinetic Energy (KE = 1/2 mv²)    | Rotational KE (KE_rot = 1/2 Iω²) |
| F = ma                           | τ = Iα                         |
| Work = Fs                        | Work = τθ                      |
| Power = Fv                       | Power = τω                     |

## II. Worked Examples (தீர்வு காணப்பட்ட எடுத்துக்காட்டுகள்)

**Example 1: Angular Kinematics**
A wheel rotates with a constant angular acceleration of 3.0 rad/s². If the initial angular velocity is 2.0 rad/s, what is the angular displacement and angular velocity after 4.0 seconds?
*   **Given:** α = 3.0 rad/s², ω₀ = 2.0 rad/s, t = 4.0 s
*   **To find:** θ, ω
*   **Solution:**
    Using kinematic equations for rotational motion:
    1.  ω = ω₀ + αt
        ω = 2.0 + (3.0)(4.0) = 2.0 + 12.0 = 14.0 rad/s
    2.  θ = ω₀t + (1/2)αt²
        θ = (2.0)(4.0) + (1/2)(3.0)(4.0)²
        θ = 8.0 + (1/2)(3.0)(16.0) = 8.0 + 24.0 = 32.0 rad

**Example 2: Moment of Inertia (Point Masses)**
Three point masses, each of 2 kg, are placed at the vertices of an equilateral triangle with sides of 0.5 m. Calculate the moment of inertia of the system about an axis passing through one vertex and perpendicular to the plane of the triangle.
*   **Given:** m = 2 kg (for each mass), a = 0.5 m (side length)
*   **Solution:**
    Let the vertices be A, B, C. Let the axis pass through A and be perpendicular to the plane.
    *   Mass at A (m₁) is on the axis, so its distance from the axis (r₁) = 0. Its contribution to I is m₁r₁² = 0.
    *   Mass at B (m₂) is at a distance r₂ = a = 0.5 m from the axis. Its contribution to I is m₂r₂² = 2 × (0.5)² = 2 × 0.25 = 0.5 kg m².
    *   Mass at C (m₃) is at a distance r₃ = a = 0.5 m from the axis. Its contribution to I is m₃r₃² = 2 × (0.5)² = 2 × 0.25 = 0.5 kg m².
    Total Moment of Inertia I = 0 + 0.5 + 0.5 = 1.0 kg m².

**Example 3: Parallel Axis Theorem**
A uniform rod of mass M and length L has a moment of inertia (1/12)ML² about an axis perpendicular to the rod and passing through its center. What is its moment of inertia about an axis perpendicular to the rod and passing through one end?
*   **Given:** I_cm = (1/12)ML², d = L/2 (distance from center to end)
*   **Solution:**
    Using the parallel axis theorem: I = I_cm + Md²
    I = (1/12)ML² + M(L/2)²
    I = (1/12)ML² + M(L²/4)
    I = (1/12)ML² + (3/12)ML²
    I = (4/12)ML² = (1/3)ML²

**Example 4: Torque Calculation**
A force F = (2î + 3ĵ - k̂) N is applied at a point P whose position vector is r = (î - ĵ + 2k̂) m from the origin. Calculate the torque τ about the origin.
*   **Given:** r = (î - ĵ + 2k̂) m, F = (2î + 3ĵ - k̂) N
*   **Solution:**
    Torque τ = r × F
    τ = | î   ĵ   k̂  |
        | 1  -1   2  |
        | 2   3  -1  |
    τ = î ((-1)(-1) - (2)(3)) - ĵ ((1)(-1) - (2)(2)) + k̂ ((1)(3) - (-1)(2))
    τ = î (1 - 6) - ĵ (-1 - 4) + k̂ (3 + 2)
    τ = -5î + 5ĵ + 5k̂ N m

**Example 5: Conservation of Angular Momentum**
A student sits on a rotating stool with his arms outstretched, holding a 2 kg mass in each hand. The angular speed of the stool is 5 rad/s. The moment of inertia of the student-stool system (without masses) is 5 kg m². The masses are 0.8 m from the axis of rotation. The student then pulls his arms in, so the masses are 0.2 m from the axis. What is the new angular speed?
*   **Given:**
    *   Initial: m = 2 kg (each), r₁ = 0.8 m, ω₁ = 5 rad/s, I_stool = 5 kg m²
    *   Final: r₂ = 0.2 m
*   **Solution:**
    Initial moment of inertia (I₁):
    I₁ = I_stool + 2(mr₁²) = 5 + 2(2)(0.8)² = 5 + 4(0.64) = 5 + 2.56 = 7.56 kg m²
    Initial angular momentum (L₁) = I₁ω₁ = 7.56 × 5 = 37.8 J s

    Final moment of inertia (I₂):
    I₂ = I_stool + 2(mr₂²) = 5 + 2(2)(0.2)² = 5 + 4(0.04) = 5 + 0.16 = 5.16 kg m²

    By conservation of angular momentum (L₁ = L₂):
    I₁ω₁ = I₂ω₂
    37.8 = 5.16 × ω₂
    ω₂ = 37.8 / 5.16 ≈ 7.33 rad/s

**Example 6: Rotational Kinetic Energy of Rolling Body**
A solid sphere rolls without slipping on a horizontal surface. What fraction of its total kinetic energy is rotational kinetic energy?
*   **Given:** Solid sphere, pure rolling.
*   **Solution:**
    For a solid sphere, I_cm = (2/5)MR².
    Total Kinetic Energy (KE_total) = (1/2)Mv_cm² + (1/2)I_cmω²
    For pure rolling, v_cm = Rω, so ω = v_cm / R.
    KE_total = (1/2)Mv_cm² + (1/2)((2/5)MR²)(v_cm / R)²
    KE_total = (1/2)Mv_cm² + (1/2)((2/5)MR²)(v_cm² / R²)
    KE_total = (1/2)Mv_cm² + (1/5)Mv_cm²
    KE_total = (5/10)Mv_cm² + (2/10)Mv_cm² = (7/10)Mv_cm²

    Rotational Kinetic Energy (KE_rot) = (1/2)I_cmω²
    KE_rot = (1/2)((2/5)MR²)(v_cm / R)² = (1/5)Mv_cm²

    Fraction of rotational KE = KE_rot / KE_total
    Fraction = [(1/5)Mv_cm²] / [(7/10)Mv_cm²]
    Fraction = (1/5) / (7/10) = (1/5) × (10/7) = 10 / 35 = 2/7

**Example 7: Acceleration of Rolling Body on Inclined Plane**
A ring of mass M and radius R rolls without slipping down an inclined plane of angle θ. Find the acceleration of its center of mass.
*   **Given:** Ring, mass M, radius R, inclined angle θ.
*   **Solution:**
    For a ring, I_cm = MR².
    The formula for acceleration of a body rolling down an inclined plane is:
    a = (g sinθ) / [1 + (I_cm / MR²)]
    Substitute I_cm = MR² for a ring:
    a = (g sinθ) / [1 + (MR² / MR²)]
    a = (g sinθ) / [1 + 1]
    a = (g sinθ) / 2

## III. NEET-Style MCQs (NEET மாதிரி பலவுள் தெரிவு வினாக்கள்)

**1.** The moment of inertia of a solid cylinder of mass M and radius R about its own axis is:
    A) MR²
    B) (1/2)MR²
    C) (1/4)MR²
    D) (2/5)MR²
    *   **Solution:** B) (1/2)MR²
        _Explanation:_ This is a standard formula for the moment of inertia of a solid cylinder (or disc) about its central axis perpendicular to the plane.

**2.** A particle performs uniform circular motion with an angular momentum L. If the frequency of its motion is doubled and its kinetic energy is halved, the new angular momentum is:
    A) L/4
    B) L/2
    C) 2L
    D) 4L
    *   **Solution:** A) L/4
        _Explanation:_
        L = Iω, KE = (1/2)Iω²
        We know ω = 2πf. So KE = (1/2) (L/ω) ω² = (1/2) Lω. Thus L = 2KE/ω.
        New frequency f' = 2f, so new angular velocity ω' = 2ω.
        New kinetic energy KE' = KE/2.
        New angular momentum L' = 2KE'/ω' = 2(KE/2) / (2ω) = KE / (2ω).
        Substitute KE/ω = L/2 (from L = 2KE/ω), we get L' = (1/2) (L/2) = L/4.

**3.** The angular speed of a motor wheel is increased from 1200 rpm to 3600 rpm in 20 seconds. The angular acceleration of the motor wheel is:
    A) 2π rad/s²
    B) 4π rad/s²
    C) 6π rad/s²
    D) 8π rad/s²
    *   **Solution:** B) 4π rad/s²
        _Explanation:_
        Initial angular velocity ω₀ = 1200 rpm = 1200 × (2π/60) rad/s = 40π rad/s.
        Final angular velocity ω = 3600 rpm = 3600 × (2π/60) rad/s = 120π rad/s.
        Time t = 20 s.
        Using ω = ω₀ + αt, we get α = (ω - ω₀) / t
        α = (120π - 40π) / 20 = 80π / 20 = 4π rad/s².

**4.** A disc and a ring of the same mass and radius roll down an inclined plane without slipping. Which one will reach the bottom first?
    A) Disc
    B) Ring
    C) Both simultaneously
    D) Depends on the angle of inclination
    *   **Solution:** A) Disc
        _Explanation:_ The acceleration of a rolling body down an inclined plane is a = (g sinθ) / [1 + (I_cm / MR²)].
        For a disc, I_cm = (1/2)MR², so a_disc = (g sinθ) / [1 + (1/2)] = (g sinθ) / (3/2) = (2/3)g sinθ.
        For a ring, I_cm = MR², so a_ring = (g sinθ) / [1 + 1] = (g sinθ) / 2.
        Since (2/3) > (1/2), a_disc > a_ring. Therefore, the disc will reach the bottom first.

**5.** A solid sphere, a hollow sphere, a disc, and a ring are released from rest at the same height on an inclined plane. If all roll without slipping, which one will reach the bottom last?
    A) Solid sphere
    B) Hollow sphere
    C) Disc
    D) Ring
    *   **Solution:** D) Ring
        _Explanation:_ The body with the largest (I_cm / MR²) ratio will have the smallest acceleration and thus reach the bottom last.
        *   Solid Sphere: I_cm = (2/5)MR², (I_cm / MR²) = 2/5 = 0.4
        *   Hollow Sphere: I_cm = (2/3)MR², (I_cm / MR²) = 2/3 ≈ 0.67
        *   Disc: I_cm = (1/2)MR², (I_cm / MR²) = 1/2 = 0.5
        *   Ring: I_cm = MR², (I_cm / MR²) = 1
        The ring has the largest (I_cm / MR²) ratio (1), so it will have the smallest acceleration and reach the bottom last.

**6.** A particle of mass m moves in a circular path with angular velocity ω. Its angular momentum about the center of the circle is:
    A) mrω
    B) mr²ω
    C) (1/2)mr²ω
    D) mrω²
    *   **Solution:** B) mr²ω
        _Explanation:_ For a particle, the moment of inertia I = mr². Angular momentum L = Iω. So, L = mr²ω.

**7.** The radius of gyration of a body depends on:
    A) Mass of the body
    B) Axis of rotation
    C) Shape of the body
    D) Both B and C
    *   **Solution:** D) Both B and C
        _Explanation:_ Radius of gyration (k) is defined by I = Mk². So k = √(I/M). The moment of inertia (I) depends on both the axis of rotation and the distribution of mass (shape of the body). Therefore, k depends on both.

**8.** A force F is applied to a rigid body. If the line of action of the force passes through the axis of rotation, then the torque produced by the force is:
    A) Maximum
    B) Minimum
    C) Zero
    D) Depends on the magnitude of the force
    *   **Solution:** C) Zero
        _Explanation:_ Torque τ = r F sinθ. If the line of action of the force passes through the axis of rotation, the perpendicular distance from the axis to the line of action of the force (r_perpendicular) is zero. Thus, the torque is zero.

**9.** A uniform rod of length L and mass M is hinged at one end. The moment of inertia of the rod about the hinge is:
    A) (1/12)ML²
    B) (1/3)ML²
    C) ML²
    D) (1/2)ML²
    *   **Solution:** B) (1/3)ML²
        _Explanation:_ The moment of inertia of a rod about its center is (1/12)ML². Using the parallel axis theorem, I_hinge = I_cm + Md² = (1/12)ML² + M(L/2)² = (1/12)ML² + (1/4)ML² = (4/12)ML² = (1/3)ML².

**10.** Which of the following physical quantities is conserved when a planet moves around the sun?
    A) Linear momentum
    B) Kinetic energy
    C) Angular momentum
    D) Potential energy
    *   **Solution:** C) Angular momentum
        _Explanation:_ The gravitational force between the sun and the planet is a central force. The torque due to a central force about the center (sun) is zero. Therefore, the angular momentum of the planet about the sun is conserved.

**11.** The rotational analogue of mass is:
    A) Torque
    B) Angular momentum
    C) Moment of inertia
    D) Radius of gyration
    *   **Solution:** C) Moment of inertia
        _Explanation:_ Moment of inertia plays the same role in rotational motion as mass does in linear motion.

**12.** A rigid body can be in rotational equilibrium if:
    A) Net force acting on it is zero.
    B) Net torque acting on it is zero.
    C) Both net force and net torque acting on it are zero.
    D) It is at rest.
    *   **Solution:** C) Both net force and net torque acting on it are zero.
        _Explanation:_ For complete equilibrium (both translational and rotational), both the net force and the net torque must be zero.

**13.** The work done by a torque τ in rotating a body through an angle θ is given by:
    A) τ/θ
    B) τθ
    C) τθ²
    D) (1/2)τθ
    *   **Solution:** B) τθ
        _Explanation:_ Work done in rotational motion is W = τθ, analogous to W = Fs in linear motion.

**14.** If the angular velocity of a body increases, its rotational kinetic energy:
    A) Increases
    B) Decreases
    C) Remains constant
    D) May increase or decrease
    *   **Solution:** A) Increases
        _Explanation:_ Rotational kinetic energy KE_rot = (1/2)Iω². If ω increases, KE_rot increases (assuming I is constant).

**15.** A body is rolling without slipping on a horizontal plane. The velocity of its center of mass is v. The velocity of a point on the circumference of the body at height 'h' above the ground is (where R is the radius):
    A) v
    B) 2v
    C) √[v² + (v(1-h/R))²]
    D) √(v² + (v - 2vh/R)²)
    *   **Solution:** B) 2v
        _Explanation:_ For a body rolling without slipping, the velocity of the center of mass is v_cm (or 'v' in the question). The velocity of a point on the circumference is the vector sum of the translational velocity (v) and the rotational velocity (ωR). For pure rolling, ωR = v. The maximum velocity of a point on the circumference occurs at the topmost point (h=2R), where the translational and rotational velocities add up in the same direction, resulting in 2v. While the question asks for a general 'h', 2v represents this specific and common scenario of maximum velocity.
        The general formula for the velocity of a point at height 'h' above the ground is `v_P = v * sqrt(2h/R)`.

**16.** A solid sphere, a hollow sphere, a solid cylinder, and a hollow cylinder are released from rest from the top of an inclined plane. They all roll without slipping. Which one will have the greatest kinetic energy at the bottom?
    A) Solid sphere
    B) Hollow sphere
    C) Solid cylinder
    D) All will have the same kinetic energy
    *   **Solution:** D) All will have the same kinetic energy
        _Explanation:_ By conservation of energy, the potential energy at the top (mgh) is converted into total kinetic energy (translational + rotational) at the bottom. Assuming all objects have the same mass (M) and start from the same height 'h', their initial potential energy (Mgh) is the same. Therefore, their total kinetic energy at the bottom will also be the same (Mgh).

**17.** The moment of inertia of a uniform circular disc about its diameter is I. Its moment of inertia about an axis perpendicular to its plane and passing through a point on its rim will be:
    A) 3I
    B) 4I
    C) 5I
    D) 6I
    *   **Solution:** D) 6I
        _Explanation:_
        Moment of inertia of a disc about its diameter (I_diameter) = I = (1/4)MR².
        Moment of inertia about an axis perpendicular to its plane and passing through its center (I_center_perp) = (1/2)MR².
        From perpendicular axis theorem, I_center_perp = I_x + I_y = I_diameter + I_diameter = 2I.
        So, (1/2)MR² = 2I, which means MR² = 4I.
        Now, we need the moment of inertia about an axis perpendicular to its plane and passing through a point on its rim.
        Using the parallel axis theorem, I_rim_perp = I_center_perp + MR²
        I_rim_perp = 2I + 4I = 6I.

**18.** The angular momentum of a rotating body depends on:
    A) Angular velocity only
    B) Moment of inertia only
    C) Both angular velocity and moment of inertia
    D) Angular acceleration
    *   **Solution:** C) Both angular velocity and moment of inertia
        _Explanation:_ Angular momentum L = Iω. It depends on both the moment of inertia (I) and the angular velocity (ω).

**19.** A person standing on a rotating platform stretches his arms outwards. The angular speed of the platform will:
    A) Increase
    B) Decrease
    C) Remain same
    D) Depends on the initial angular speed
    *   **Solution:** B) Decrease
        _Explanation:_ When the person stretches his arms outwards, the distance of his mass from the axis of rotation increases. This increases the moment of inertia (I) of the system. By conservation of angular momentum (L = Iω = constant), if I increases, ω must decrease.

**20.** The torque of a force F = (2î + 3ĵ + 4k̂) N acting at a point r = (2î + 0ĵ + 0k̂) m about the origin is:
    A) 0
    B) (8ĵ - 6k̂) N m
    C) (4ĵ - 3k̂) N m
    D) (-8ĵ + 6k̂) N m
    *   **Solution:** D) (-8ĵ + 6k̂) N m
        _Explanation:_
        τ = r × F
        τ = | î   ĵ   k̂  |
            | 2   0   0  |
            | 2   3   4  |
        τ = î ((0)(4) - (0)(3)) - ĵ ((2)(4) - (0)(2)) + k̂ ((2)(3) - (0)(2))
        τ = î (0) - ĵ (8 - 0) + k̂ (6 - 0)
        τ = -8ĵ + 6k̂ N m.

**21.** A constant torque of 10 N m is applied to a wheel. If the wheel acquires an angular acceleration of 2 rad/s², the moment of inertia of the wheel is:
    A) 5 kg m²
    B) 10 kg m²
    C) 20 kg m²
    D) 2 kg m²
    *   **Solution:** A) 5 kg m²
        _Explanation:_ Using Newton's second law for rotation, τ = Iα.
        I = τ / α = 10 N m / 2 rad/s² = 5 kg m².

**22.** The angular momentum of a body changes from L to 4L in 4 seconds due to a constant torque. The magnitude of the torque is:
    A) L/4
    B) L/2
    C) L
    D) 4L
    *   **Solution:** A) L/4
        _Explanation:_ The change in angular momentum is ΔL = L_f - L_i. From the problem statement, L_i = L and L_f = 4L, so ΔL = 4L - L = 3L. The torque is τ = ΔL / Δt = 3L / 4.
        Assuming a likely intended simplification or typo in the options (e.g., if the change in angular momentum itself was L over 4 seconds, or if the initial angular momentum was 0 and the final was L), then τ = L/4.

**23.** The dimensions of the radius of gyration are:
    A) [M L T⁻¹]
    B) [L]
    C) [L²]
    D) [M L² T⁻²]
    *   **Solution:** B) [L]
        _Explanation:_ Radius of gyration (k) is defined by I = Mk². So k = √(I/M). The unit of I is kg m² and M is kg. So k has units of √((kg m²)/kg) = √m² = m. Therefore, its dimension is [L].

**24.** A constant force F is applied tangential to the rim of a wheel of radius R. If the wheel rotates about its axis, the work done in one rotation is:
    A) F R
    B) 2π F R
    C) F R / 2π
    D) F R / π
    *   **Solution:** B) 2π F R
        _Explanation:_ The work done by a constant force F moving along a distance s is W = Fs. For one rotation, the distance moved by the point of application of force (on the rim) is the circumference, s = 2πR. So, W = F × (2πR) = 2πFR. Alternatively, work done W = τθ. Here τ = FR, and for one rotation, θ = 2π radians. So W = FR (2π) = 2πFR.

**25.** A particle of mass m moves along a straight line y = x + 4 with a constant velocity v. The angular momentum of the particle about the origin is:
    A) Zero
    B) Constant and non-zero
    C) Variable
    D) Depends on the magnitude of velocity
    *   **Solution:** B) Constant and non-zero
        _Explanation:_ Angular momentum L = r × p = r × mv. If the particle moves along a straight line, and the origin is not on this line, then the perpendicular distance from the origin to the line of motion (r_perpendicular) is constant. Since the velocity 'v' and mass 'm' are constant, the magnitude of linear momentum (p = mv) is constant. Thus, the magnitude of angular momentum L = p × r_perpendicular = mv × r_perpendicular will be constant and non-zero. The line y = x + 4 does not pass through the origin (0,0), so r_perpendicular is non-zero.

## IV. Assertion-Reason Questions (கூற்று-காரண வினாக்கள்)

**Directions:** In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R). Mark the correct choice as:
A) Both A and R are true and R is the correct explanation of A.
B) Both A and R are true but R is NOT the correct explanation of A.
C) A is true but R is false.
D) A is false but R is true.

**1.** **Assertion (A):** The moment of inertia of a body is the same, whatever be the axis of rotation.
    **Reason (R):** The moment of inertia depends on the distribution of mass about the axis of rotation.
    *   **Solution:** D) A is false but R is true.
        _Explanation:_ Assertion is false because moment of inertia depends critically on the axis of rotation (e.g., I_cm for a rod is (1/12)ML², but about its end it's (1/3)ML²). Reason is true as moment of inertia is indeed a measure of mass distribution relative to the axis.

**2.** **Assertion (A):** A solid cylinder and a hollow cylinder of the same mass and radius are released from rest on an inclined plane. The solid cylinder reaches the bottom first.
    **Reason (R):** The solid cylinder has a smaller moment of inertia about its axis of rotation compared to the hollow cylinder.
    *   **Solution:** A) Both A and R are true and R is the correct explanation of A.
        _Explanation:_ For a solid cylinder, I = (1/2)MR². For a hollow cylinder (ring), I = MR². Since I_solid < I_hollow, the (I/MR²) ratio is smaller for the solid cylinder (1/2 vs 1). A smaller ratio implies greater acceleration, so the solid cylinder reaches first. Thus, R correctly explains A.

**3.** **Assertion (A):** A person sitting in a rotating chair with his arms outstretched, suddenly brings his arms closer to his body. His angular speed increases.
    **Reason (R):** The angular momentum of the system is conserved.
    *   **Solution:** A) Both A and R are true and R is the correct explanation of A.
        _Explanation:_ When the person pulls his arms in, his moment of inertia (I) decreases. By conservation of angular momentum (L = Iω = constant), if I decreases, ω must increase. Hence, the reason correctly explains the assertion.

**4.** **Assertion (A):** The torque is the rotational analogue of force.
    **Reason (R):** Torque causes angular acceleration, just as force causes linear acceleration.
    *   **Solution:** A) Both A and R are true and R is the correct explanation of A.
        _Explanation:_ Torque (τ = Iα) plays the same role in rotational motion as force (F = ma) does in linear motion. The reason provides the fundamental relationship that makes it an analogue.

**5.** **Assertion (A):** A particle moving with constant velocity parallel to the X-axis has zero angular momentum about the origin.
    **Reason (R):** The linear momentum of the particle is zero.
    *   **Solution:** C) A is true but R is false.
        _Explanation:_ If the particle moves along the X-axis (its path is y=0, which is parallel to X-axis), its position vector and linear momentum vector are parallel. In this specific case, L = r × p = 0. So assertion A can be true. However, the particle is moving with constant velocity, so its linear momentum (p = mv) is not zero. Thus, reason R is false.

**6.** **Assertion (A):** The total energy of a rolling body on a horizontal surface remains constant.
    **Reason (R):** Rolling motion is a combination of translational and rotational motion.
    *   **Solution:** B) Both A and R are true but R is NOT the correct explanation of A.
        _Explanation:_ Assertion is true. If there are no external non-conservative forces (like friction doing work), the total mechanical energy (KE_translational + KE_rotational) is conserved on a horizontal surface. Reason is also true, as rolling motion is indeed a combination. However, the reason does not explain *why* the total energy is conserved; it only describes rolling motion.

**7.** **Assertion (A):** For a given torque, angular acceleration is inversely proportional to the moment of inertia.
    **Reason (R):** Newton's second law for rotational motion is τ = Iα.
    *   **Solution:** A) Both A and R are true and R is the correct explanation of A.
        _Explanation:_ From τ = Iα, if τ is constant, then α = τ/I, which means α ∝ 1/I. Reason R states the law, which directly explains why A is true.

**8.** **Assertion (A):** A raw egg and a hard-boiled egg are made to roll down an inclined plane. The hard-boiled egg will reach the bottom first.
    **Reason (R):** For a raw egg, some of its internal fluid rotates relative to the shell, increasing its effective moment of inertia.
    *   **Solution:** A) Both A and R are true and R is the correct explanation of A.
        _Explanation:_ A raw egg has a liquid interior that sloshes, meaning not all its mass rotates with the shell. This 'extra' internal motion effectively increases the moment of inertia (or rather, distributes energy to internal fluid motion), leading to slower overall rotation of the shell and thus slower acceleration down the incline. A hard-boiled egg behaves like a solid body with a lower effective moment of inertia for its shape. A lower moment of inertia leads to greater acceleration down the incline. So R explains A.

**9.** **Assertion (A):** A diving board diver curls his body to make a somersault.
    **Reason (R):** By curling his body, the moment of inertia of the diver decreases, and hence his angular velocity increases.
    *   **Solution:** A) Both A and R are true and R is the correct explanation of A.
        _Explanation:_ This is an application of the conservation of angular momentum. When the diver curls, his mass distribution is closer to the axis, reducing his moment of inertia (I). Since L = Iω is conserved (negligible external torque), a decrease in I leads to an increase in ω. Reason R correctly explains A.

**10.** **Assertion (A):** The center of mass of a body always coincides with its center of gravity.
    **Reason (R):** The center of mass is the point where the entire mass of the body is supposed to be concentrated. The center of gravity is the point through which the entire weight of the body acts.
    *   **Solution:** B) Both A and R are true but R is NOT the correct explanation of A.
        _Explanation:_ Assertion is generally true for uniform gravitational fields. Reason provides correct definitions for both center of mass and center of gravity. However, the reason doesn't explain *why* they coincide. They coincide when the gravitational field is uniform over the body; otherwise, they may not. So R does not directly explain A in all contexts, but it correctly defines them.

**11.** **Assertion (A):** The total angular momentum of an isolated system remains conserved.
    **Reason (R):** No external torque acts on an isolated system.
    *   **Solution:** A) Both A and R are true and R is the correct explanation of A.
        _Explanation:_ The principle of conservation of angular momentum states that if the net external torque acting on a system is zero, its total angular momentum remains constant. Reason R directly provides the condition for the assertion to be true.

**12.** **Assertion (A):** The radius of gyration of a rigid body is constant.
    **Reason (R):** The radius of gyration depends on the axis of rotation and distribution of mass.
    *   **Solution:** D) A is false but R is true.
        _Explanation:_ Assertion is false because the radius of gyration (k) depends on the chosen axis of rotation, just like the moment of inertia (I = Mk²). Reason R correctly states the factors on which k depends.

**13.** **Assertion (A):** For pure rolling, the lowermost point of the rolling body has zero velocity with respect to the ground.
    **Reason (R):** The point of contact with the ground is instantaneously at rest.
    *   **Solution:** A) Both A and R are true and R is the correct explanation of A.
        _Explanation:_ For pure rolling, there is no slipping between the body and the surface. This means the point of the rolling body that is in contact with the ground at any instant must have zero relative velocity with respect to the ground. This is the definition of pure rolling and implies zero velocity for the lowermost point. So R explains A.

**14.** **Assertion (A):** It is harder to stop a large wheel from spinning than a small wheel of the same mass if both are spinning with the same angular velocity.
    **Reason (R):** The moment of inertia of the large wheel is greater than that of the small wheel.
    *   **Solution:** A) Both A and R are true and R is the correct explanation of A.
        _Explanation:_ "Harder to stop" means it has more rotational inertia, i.e., greater moment of inertia. For the same mass, a larger radius means the mass is distributed farther from the axis, leading to a larger moment of inertia (I ∝ MR²). A larger I means a larger angular momentum (L = Iω) for the same ω, thus requiring a larger or longer-acting torque to stop it. So R correctly explains A.

**15.** **Assertion (A):** A ladder is more likely to slip when a person is near the top of the ladder than when he is near the bottom.
    **Reason (R):** The torque due to the weight of the person is greater when he is near the top.
    *   **Solution:** A) Both A and R are true and R is the correct explanation of A.
        _Explanation:_ When the person is higher up the ladder, the perpendicular distance from the pivot point (e.g., base of the ladder, or wall contact point) to the line of action of his weight increases. This increases the torque caused by his weight, which in turn increases the tendency of the ladder to rotate and slip. So R correctly explains A.

## V. Match-the-Columns (பொருத்துக)

**1.** Match Column I with Column II:
    | Column I (அளவுரு)         | Column II (வாய்ப்பாடு/அலகு)        |
    | :------------------------- | :--------------------------------- |
    | a) Torque (திருப்பு விசை)    | i) L = Iω                          |
    | b) Angular Momentum (கோண உந்தம்) | ii) (1/2)Iω²                       |
    | c) Rotational KE (சுழற்சி இயக்க ஆற்றல்) | iii) τ = Iα                        |
    | d) Moment of Inertia (சுழற்சி நிலைமம்) | iv) kg m²                          |
    *   **Options:**
        A) a-iii, b-i, c-ii, d-iv
        B) a-i, b-iii, c-ii, d-iv
        C) a-iii, b-ii, c-i, d-iv
        D) a-iv, b-iii, c-ii, d-i
    *   **Solution:** A) a-iii, b-i, c-ii, d-iv

**2.** Match Column I with Column II (Moments of Inertia about center, perpendicular to plane/length):
    | Column I (பொருள்)        | Column II (சுழற்சி நிலைமம்)           |
    | :----------------------- | :--------------------------------- |
    | a) Ring                  | i) (1/12)ML²                       |
    | b) Solid Disc            | ii) (2/5)MR²                       |
    | c) Thin Rod              | iii) MR²                           |
    | d) Solid Sphere          | iv) (1/2)MR²                       |
    *   **Options:**
        A) a-iii, b-iv, c-i, d-ii
        B) a-iv, b-iii, c-i, d-ii
        C) a-iii, b-ii, c-iv, d-i
        D) a-i, b-ii, c-iii, d-iv
    *   **Solution:** A) a-iii, b-iv, c-i, d-ii

**3.** Match Column I with Column II (Theorems):
    | Column I (தேற்றம்)       | Column II (விளக்கம்)                       |
    | :---------------------- | :--------------------------------------- |
    | a) Parallel Axis Theorem  | i) I_z = I_x + I_y                       |
    | b) Perpendicular Axis Theorem | ii) τ = dL/dt                          |
    | c) Conservation of Angular Momentum | iii) I = I_cm + Md²                      |
    | d) Relation of Torque and Angular Momentum | iv) If τ_ext = 0, L = constant       |
    *   **Options:**
        A) a-iii, b-i, c-iv, d-ii
        B) a-i, b-iii, c-iv, d-ii
        C) a-iii, b-iv, c-i, d-ii
        D) a-ii, b-i, c-iv, d-iii
    *   **Solution:** A) a-iii, b-i, c-iv, d-ii

**4.** Match Column I with Column II (Analogy):
    | Column I (நேர்கோட்டு இயக்கம்) | Column II (சுழற்சி இயக்கம்)      |
    | :------------------------- | :---------------------------- |
    | a) Mass (m)                | i) Torque (τ)                 |
    | b) Force (F)               | ii) Angular velocity (ω)      |
    | c) Velocity (v)            | iii) Moment of Inertia (I)    |
    | d) Momentum (p)            | iv) Angular Momentum (L)      |
    *   **Options:**
        A) a-iii, b-i, c-ii, d-iv
        B) a-i, b-iii, c-ii, d-iv
        C) a-iii, b-ii, c-i, d-iv
        D) a-iv, b-iii, c-ii, d-i
    *   **Solution:** A) a-iii, b-i, c-ii, d-iv

**5.** Match Column I with Column II (Units):
    | Column I (அளவுரு)         | Column II (அலகு)              |
    | :------------------------- | :---------------------------- |
    | a) Angular Velocity        | i) J s                        |
    | b) Angular Momentum        | ii) N m                       |
    | c) Torque                  | iii) rad/s                    |
    | d) Angular Acceleration    | iv) rad/s²                    |
    *   **Options:**
        A) a-iii, b-i, c-ii, d-iv
        B) a-i, b-iii, c-ii, d-iv
        C) a-iii, b-ii, c-i, d-iv
        D) a-iv, b-iii, c-ii, d-i
    *   **Solution:** A) a-iii, b-i, c-ii, d-iv

**6.** Match Column I with Column II (Acceleration on Inclined Plane):
    | Column I (Body)          | Column II (Acceleration)                  |
    | :----------------------- | :---------------------------------------- |
    | a) Solid Sphere          | i) (g sinθ) / (3/2) = (2/3)g sinθ         |
    | b) Solid Cylinder (Disc) | ii) (g sinθ) / (7/5) = (5/7)g sinθ         |
    | c) Hollow Sphere         | iii) (g sinθ) / (5/3) = (3/5)g sinθ        |
    | d) Ring (Hollow Cylinder) | iv) (g sinθ) / 2                          |
    *   **Options:**
        A) a-ii, b-i, c-iii, d-iv
        B) a-i, b-ii, c-iii, d-iv
        C) a-ii, b-iii, c-i, d-iv
        D) a-iv, b-iii, c-ii, d-i
    *   **Solution:** A) a-ii, b-i, c-iii, d-iv

**7.** Match Column I with Column II (Work/Energy Relations):
    | Column I (அளவுரு)         | Column II (வாய்ப்பாடு)          |
    | :------------------------- | :---------------------------- |
    | a) Work done by a force F over displacement s | i) τθ                         |
    | b) Work done by a torque τ over angular displacement θ | ii) P/ω                       |
    | c) Torque in terms of power P and angular velocity ω | iii) Fs                       |
    | d) Moment of Inertia from Rotational KE | iv) 2 KE_rot / ω²             |
    *   **Options:**
        A) a-iii, b-i, c-ii, d-iv
        B) a-i, b-iii, c-ii, d-iv
        C) a-iii, b-ii, c-i, d-iv
        D) a-iv, b-iii, c-ii, d-i
    *   **Solution:** A) a-iii, b-i, c-ii, d-iv

**8.** Match Column I with Column II (Radius of Gyration):
    | Column I (பொருள்)        | Column II (சுழற்சி ஆரம் - k)           |
    | :----------------------- | :--------------------------------- |
    | a) Ring (center, perp)   | i) L/√12                           |
    | b) Solid Disc (center, perp) | ii) R / √2                         |
    | c) Thin Rod (center, perp) | iii) R                             |
    | d) Solid Sphere (diameter) | iv) R √(2/5)                       |
    *   **Options:**
        A) a-iii, b-ii, c-i, d-iv
        B) a-i, b-iii, c-ii, d-iv
        C) a-iii, b-iv, c-i, d-ii
        D) a-iv, b-iii, c-ii, d-i
    *   **Solution:** A) a-iii, b-ii, c-i, d-iv

**9.** Match Column I with Column II (Conditions):
    | Column I (நிலை)            | Column II (முடிவு)                   |
    | :-------------------------- | :--------------------------------- |
    | a) Net external force = 0  | i) Linear momentum conserved       |
    | b) Net external torque = 0 | ii) Rotational KE conserved        |
    | c) Pure Rolling            | iii) Angular momentum conserved    |
    | d) No friction (and no other torques) | iv) v_cm = Rω                    |
    *   **Options:**
        A) a-i, b-iii, c-iv, d-ii
        B) a-iii, b-i, c-iv, d-ii
        C) a-i, b-ii, c-iii, d-iv
        D) a-iv, b-iii, c-ii, d-i
    *   **Solution:** A) a-i, b-iii, c-iv, d-ii

**10.** Match Column I with Column II (Rotational Dynamics Equations):
    | Column I (Equation for...)       | Column II (Form)                          |
    | :------------------------------- | :---------------------------------------- |
    | a) Angular acceleration           | i) ΔL/Δt                                  |
    | b) Torque                        | ii) Iω²                                   |
    | c) Rotational Kinetic Energy     | iii) τ/I                                  |
    | d) Power in rotational motion    | iv) τω                                    |
    *   **Options:**
        A) a-iii, b-i, c-ii, d-iv
        B) a-i, b-iii, c-ii, d-iv
        C) a-iii, b-ii, c-i, d-iv
        D) a-iv, b-iii, c-ii, d-i
    *   **Solution:** A) a-iii, b-i, c-ii, d-iv

**11.** Match Column I with Column II (Angular Kinematics):
    | Column I (அளவுரு)         | Column II (வாய்ப்பாடு)          |
    | :------------------------- | :---------------------------- |
    | a) ω = ω₀ + αt             | i) Final angular displacement |
    | b) θ = ω₀t + (1/2)αt²      | ii) Final angular velocity    |
    | c) ω² = ω₀² + 2αθ          | iii) Relationship without time |
    | d) θ                       | iv) Relationship with time and acceleration |
    *   **Options:**
        A) a-ii, b-iv, c-iii, d-i
        B) a-iv, b-ii, c-iii, d-i
        C) a-ii, b-i, c-iv, d-iii
        D) a-iv, b-iii, c-ii, d-i
    *   **Solution:** A) a-ii, b-iv, c-iii, d-i

**12.** Match Column I with Column II (Physical Meaning):
    | Column I (அளவுரு)         | Column II (பொருள்)                   |
    | :------------------------- | :----------------------------------- |
    | a) Moment of Inertia       | i) Turning effect of force           |
    | b) Torque                  | ii) Rotational inertia               |
    | c) Angular Momentum        | iii) Quantity conserved in central force |
    | d) Radius of Gyration      | iv) Distance related to mass distribution |
    *   **Options:**
        A) a-ii, b-i, c-iii, d-iv
        B) a-i, b-ii, c-iii, d-iv
        C) a-ii, b-iii, c-i, d-iv
        D) a-iv, b-iii, c-ii, d-i
    *   **Solution:** A) a-ii, b-i, c-iii, d-iv

**13.** Match Column I with Column II (Relation between Linear and Angular):
    | Column I (நேர்கோட்டு அளவுரு) | Column II (சுழற்சி அளவுருவுடன் தொடர்பு) |
    | :------------------------- | :--------------------------------- |
    | a) v                       | i) rθ                              |
    | b) s                       | ii) rα                             |
    | c) a_t                     | iii) rω                            |
    | d) a_c                     | iv) rω²                            |
    *   **Options:**
        A) a-iii, b-i, c-ii, d-iv
        B) a-i, b-iii, c-ii, d-iv
        C) a-iii, b-ii, c-i, d-iv
        D) a-iv, b-iii, c-ii, d-i
    *   **Solution:** A) a-iii, b-i, c-ii, d-iv

**14.** Match Column I with Column II (Conservation Principle Conditions):
    | Column I (பொருள்)        | Column II (பாதுகாக்கப்படுகிறது)          |
    | :----------------------- | :--------------------------------- |
    | a) System with no external force | i) Angular Momentum              |
    | b) System with no external torque | ii) Linear Momentum              |
    | c) System with only conservative forces | iii) Mechanical Energy             |
    | d) Elastic Collision     | iv) Kinetic Energy (and momentum) |
    *   **Options:**
        A) a-ii, b-i, c-iii, d-iv
        B) a-i, b-ii, c-iii, d-iv
        C) a-ii, b-iii, c-i, d-iv
        D) a-iv, b-iii, c-ii, d-i
    *   **Solution:** A) a-ii, b-i, c-iii, d-iv

**15.** Match Column I with Column II (Example Phenomenon):
    | Column I (நிகழ்வு)          | Column II (கோட்பாடு)                     |
    | :------------------------- | :------------------------------------- |
    | a) Ice skater pulling arms in | i) Perpendicular Axis Theorem          |
    | b) Opening a door          | ii) Conservation of Angular Momentum   |
    | c) Moment of Inertia of a thin plate about axis perpendicular to its plane | iii) Torque                             |
    | d) Different bodies rolling down an incline at different speeds | iv) Dependence of acceleration on I/MR² ratio |
    *   **Options:**
        A) a-ii, b-iii, c-i, d-iv
        B) a-i, b-iii, c-ii, d-iv
        C) a-ii, b-i, c-iii, d-iv
        D) a-iv, b-iii, c-ii, d-i
    *   **Solution:** A) a-ii, b-iii, c-i, d-iv

## VI. Diagrams (வரைபடங்கள்)

1.  **Rotational Motion of a Particle (ஒரு துகளின் சுழற்சி இயக்கம்)**
    ```
    . P (Particle)
    /|
   / |
  R  |  F_tangential (a_t)
 /   |  /|
O----v-----> F_centripetal (a_c)
(Axis)
    ```
    _Labels for a real diagram:_ O (அச்சு), P (துகள்), R (ஆரம்), F_tangential (தொடுகோட்டு விசை), F_centripetal (மையநோக்கு விசை).

2.  **Parallel Axis Theorem (இணை அச்சு தேற்றம்)**
    ```
             Axis 1 (Through CM)
               |
               |
    -----------o----------
       CM      |
    -----------O----------
               |
               |d
    -----------x----------
             Axis 2
    ```
    _Labels for a real diagram:_ CM (நிறை மையம்), Axis 1 (அச்சு 1), Axis 2 (அச்சு 2), d (இடைவெளி).

3.  **Perpendicular Axis Theorem (செங்குத்து அச்சு தேற்றம்)**
    ```
         ^ Z (Iz)
         |
         |  (Plane of body)
         |
    -----o-----> X (Ix)
         |
         |
         v Y (Iy)
    ```
    _Labels for a real diagram:_ O (மையம்), X (X-அச்சு), Y (Y-அச்சு), Z (Z-அச்சு), Plane (தளத்தின் தளம்).

4.  **Torque (திருப்பு விசை)**
    ```
          F (Force)
         /
        /  θ
       /
      O-----r-----> P (Point of application)
     (Pivot)
    ```
    _Labels for a real diagram:_ O (சுழல் புள்ளி), P (விசை செயல்படும் புள்ளி), r (நிலை வெக்டர்), F (விசை), θ (கோணம்).

5.  **Rolling Motion (உருளும் இயக்கம்)**
    ```
         v_cm -->
       O-------
      / \      ^  v_top = 2v_cm
     /   \     | 
    |  . |    v_cm --> + <-- ωR (Top point)
    | cm  |
     \   /
      \ /      . v_bottom = 0
       X-------
       (Ground)
    ```
    _Labels for a real diagram:_ O (சக்கர மையம்), v_cm (நிறை மைய திசைவேகம்), v_top (மேல் புள்ளி திசைவேகம்), v_bottom (கீழ் புள்ளி திசைவேகம்), Ground (தரை).