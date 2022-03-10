const FillDetails = () => {
  return (
    <form>
      <input type="text" placeholder="Addrees" required />
      <input
        type="tel"
        pattern="^01[0-2,5]{1}[0-9]{8}$"
        placeholder="phone"
        required
      />
      <input type="email" placeholder="Email" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FillDetails;
