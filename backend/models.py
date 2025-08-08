from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

class Base(DeclarativeBase):
    pass

class Credit(Base):
    __tablename__ = 'credits'

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    creditName: Mapped[str] = mapped_column()
    monthlyPaymentDay: Mapped[int] = mapped_column()
    totalPaymentAmount: Mapped[float] = mapped_column()
    monthlyPayment: Mapped[float] = mapped_column()
    totalInstallments: Mapped[int] = mapped_column()
    installmentsPaid: Mapped[int] = mapped_column()
    interestRate: Mapped[float] = mapped_column()
    isPaidOff: Mapped[bool] = mapped_column()
    