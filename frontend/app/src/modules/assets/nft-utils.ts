export function isNft(address?: string): boolean {
  if (!address)
    return false;

  return address.startsWith('_nft_');
}

/**
 * Whether the identifier is an ERC721 token on an EVM chain or a Solana SPL NFT.
 *
 * @remarks
 * Decided from the identifier alone so the same rule works in SQL glob patterns.
 * Unlike `isNft`, these identifiers mean "detected token", not "managed by the NFT module".
 */
export function isErc721OrSolanaNft(identifier?: string): boolean {
  if (!identifier)
    return false;

  return identifier.includes('/erc721:') || identifier.startsWith('solana/nft:');
}
